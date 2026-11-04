import { useId } from 'react'

type IconProps = {
  className?: string
}

export const FolderIcon = ({ className }: IconProps) => {
  const uid = useId().replace(/:/g, '')
  const tab = `${uid}-tab`
  const body = `${uid}-body`

  return (
  <svg className={className} viewBox="0 0 64 52" aria-hidden="true">
    <defs>
      <linearGradient id={tab} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#6ec2ff" />
        <stop offset="1" stopColor="#3aa0ef" />
      </linearGradient>
      <linearGradient id={body} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#5bbcff" />
        <stop offset="0.45" stopColor="#2f9aee" />
        <stop offset="1" stopColor="#1b7fd4" />
      </linearGradient>
    </defs>
    <path
      fill={`url(#${tab})`}
      d="M4 10c0-2.2 1.8-4 4-4h14.2c1.2 0 2.3.5 3.1 1.4l3.4 3.6c.4.4.9.7 1.5.7H56c2.2 0 4 1.8 4 4v2H4v-7.7Z"
    />
    <path
      fill={`url(#${body})`}
      d="M4 16.5C4 14 6 12 8.5 12h47C58 12 60 14 60 16.5v27c0 3.6-2.9 6.5-6.5 6.5h-43C6.9 50 4 47.1 4 43.5v-27Z"
    />
    <path
      fill="#8fd4ff"
      opacity="0.35"
      d="M8 16h48c1.1 0 2 .9 2 2v4H6v-4c0-1.1.9-2 2-2Z"
    />
  </svg>
  )
}

export const GithubIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
    <rect width="64" height="64" rx="14" fill="#24292f" />
    <path
      fill="#fff"
      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      transform="translate(8 8) scale(2)"
    />
  </svg>
)

export const LinkedinIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
    <rect width="64" height="64" rx="14" fill="#0a66c2" />
    <text
      x="32"
      y="42"
      textAnchor="middle"
      fill="#fff"
      fontSize="28"
      fontWeight="700"
      fontFamily="Arial, Helvetica, sans-serif"
    >
      in
    </text>
  </svg>
)

export const WifiIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
    <path
      fill="currentColor"
      d="M8 13.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Zm4.1-3.3a5.8 5.8 0 0 0-8.2 0l1.1 1.1a4.3 4.3 0 0 1 6 0l1.1-1.1Zm2.4-2.4a9.2 9.2 0 0 0-13 0l1.1 1.1a7.6 7.6 0 0 1 10.8 0l1.1-1.1Z"
    />
  </svg>
)

export const BatteryIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 25 12" aria-hidden="true">
    <rect
      x="0.6"
      y="1.2"
      width="21"
      height="9.6"
      rx="2.2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <rect x="2.2" y="2.8" width="16" height="6.4" rx="1" fill="currentColor" />
    <path d="M23.2 4.2h.8c.6 0 1 .4 1 1v1.6c0 .6-.4 1-1 1h-.8V4.2Z" fill="currentColor" />
  </svg>
)

export const SearchIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
    <path
      fill="currentColor"
      d="M6.7 1.8a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 1.5a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8Zm5.3 7.2 2.3 2.3-.9.9-2.3-2.3.9-.9Z"
    />
  </svg>
)

export const ControlCenterIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
    <rect x="1.5" y="1.5" width="5.5" height="5.5" rx="1.4" fill="currentColor" />
    <rect x="9" y="1.5" width="5.5" height="5.5" rx="1.4" fill="currentColor" />
    <rect x="1.5" y="9" width="5.5" height="5.5" rx="1.4" fill="currentColor" />
    <rect x="9" y="9" width="5.5" height="5.5" rx="1.4" fill="currentColor" />
  </svg>
)
