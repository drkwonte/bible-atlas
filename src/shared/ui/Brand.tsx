import { Link, useLocation, useNavigate } from 'react-router-dom'

export function Brand(props: { size: 'header' | 'hero' }) {
  const navigate = useNavigate()
  const location = useLocation()

  const linkClassName =
    props.size === 'header'
      ? 'inline-flex items-center'
      : 'flex w-full justify-center'

  const logoClassName =
    props.size === 'header'
      ? 'h-8 w-auto max-w-[180px] object-contain sm:h-9 sm:max-w-[200px]'
      : 'w-[90%] h-auto object-contain'

  return (
    <Link
      to="/"
      className={linkClassName}
      aria-label="Bible Atlas 홈으로 이동"
      onClick={(e) => {
        const RESET_QUERY_PARAM_KEY = 'r'
        if (location.pathname === '/') {
          // If we're already on "/", force a navigation change to reset the Home state.
          e.preventDefault()
          navigate(`/?${RESET_QUERY_PARAM_KEY}=${Date.now()}`)
          return
        }
        // Otherwise, normal navigation to Home.
      }}
    >
      <img
        src="/logo.svg"
        alt="Bible Atlas"
        className={logoClassName}
      />
    </Link>
  )
}

