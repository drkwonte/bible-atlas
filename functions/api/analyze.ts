import { buildGeminiUserPrompt, GEMINI_OUTPUT_MIME_TYPE, GEMINI_SYSTEM_INSTRUCTIONS } from '../../src/services/gemini/promptConfig'

type Env = {
  GEMINI_API_KEY?: string
  GEMINI_MODEL_ID?: string
}

const DEFAULT_GEMINI_MODEL_ID = 'gemini-2.5-flash'
const GEMINI_API_BASE = 'https://generativelanguage.googleapis.com/v1beta/models'

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  })
}

function getGeminiText(payload: any): string {
  const text = payload?.candidates?.[0]?.content?.parts?.[0]?.text
  return typeof text === 'string' ? text.trim() : ''
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const apiKey = context.env.GEMINI_API_KEY
  const modelId = context.env.GEMINI_MODEL_ID ?? DEFAULT_GEMINI_MODEL_ID

  if (!apiKey) {
    return jsonResponse({ error: 'Missing GEMINI_API_KEY in Cloudflare environment.' }, 500)
  }

  let topic = ''
  try {
    const body = (await context.request.json()) as { topic?: string }
    topic = typeof body.topic === 'string' ? body.topic.trim() : ''
  } catch {
    return jsonResponse({ error: 'Invalid request body.' }, 400)
  }

  if (topic.length < 2) {
    return jsonResponse({ error: '검색어는 최소 2글자 이상이어야 합니다.' }, 400)
  }

  const url = `${GEMINI_API_BASE}/${modelId}:generateContent?key=${encodeURIComponent(apiKey)}`
  const geminiResponse = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      system_instruction: {
        parts: [{ text: GEMINI_SYSTEM_INSTRUCTIONS }],
      },
      contents: [
        {
          role: 'user',
          parts: [{ text: buildGeminiUserPrompt(topic) }],
        },
      ],
      generationConfig: {
        responseMimeType: GEMINI_OUTPUT_MIME_TYPE,
        temperature: 0.2,
      },
    }),
  })

  const geminiPayload = await geminiResponse.json()
  if (!geminiResponse.ok) {
    return jsonResponse({ error: 'Gemini API request failed.', details: geminiPayload }, 502)
  }

  const text = getGeminiText(geminiPayload)
  if (!text) {
    return jsonResponse({ error: 'Gemini returned empty response.' }, 502)
  }

  try {
    return jsonResponse(JSON.parse(text))
  } catch {
    return jsonResponse({ error: 'Gemini returned non-JSON content.', rawText: text }, 502)
  }
}

