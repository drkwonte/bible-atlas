import { useCallback, useState } from 'react'
import { analyzeBibleTopic } from '../../../services/gemini/analyzeBibleTopic'
import type { GeminiBibleMapResponse } from '../../../services/gemini/schemas'

const MIN_TOPIC_LENGTH = 2
const GENERIC_ERROR_MESSAGE = '요청 처리 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.'
const QUOTA_EXCEEDED_MESSAGE =
  '현재 요청이 많아 일시적으로 사용할 수 없습니다(무료 티어 제한). 잠시 후 다시 시도해 주세요.'

export type BibleMapAnalysisState =
  | { status: 'idle'; result: null; errorMessage: null }
  | { status: 'loading'; result: null; errorMessage: null }
  | { status: 'success'; result: GeminiBibleMapResponse; errorMessage: null }
  | { status: 'error'; result: null; errorMessage: string }

function toUserFriendlyErrorMessage(error: unknown): string {
  const raw = error instanceof Error ? error.message : String(error)
  const normalized = raw.toLowerCase()

  const isQuotaExceeded =
    normalized.includes('quota') ||
    normalized.includes('resource_exhausted') ||
    normalized.includes('rate limit') ||
    normalized.includes('rate-limit') ||
    normalized.includes('429')

  if (isQuotaExceeded) return QUOTA_EXCEEDED_MESSAGE
  return GENERIC_ERROR_MESSAGE
}

export function useBibleMapAnalysis() {
  const [state, setState] = useState<BibleMapAnalysisState>({
    status: 'idle',
    result: null,
    errorMessage: null,
  })

  const run = useCallback(async (topic: string) => {
    const trimmed = topic.trim()
    if (trimmed.length < MIN_TOPIC_LENGTH) {
      setState({
        status: 'error',
        result: null,
        errorMessage: `검색어는 최소 ${MIN_TOPIC_LENGTH}글자 이상 입력해 주세요.`,
      })
      return
    }

    setState({ status: 'loading', result: null, errorMessage: null })
    try {
      const result = await analyzeBibleTopic(trimmed)
      setState({ status: 'success', result, errorMessage: null })
    } catch (error) {
      setState({ status: 'error', result: null, errorMessage: toUserFriendlyErrorMessage(error) })
    }
  }, [])

  const reset = useCallback(() => {
    setState({ status: 'idle', result: null, errorMessage: null })
  }, [])

  return { state, run, reset }
}

