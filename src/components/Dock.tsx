import { useState } from 'react'
import { GithubIcon, LinkedinIcon } from './icons'
import { dockLinks } from '../content'

const dockItems = [
  {
    id: 'github',
    label: 'GitHub',
    href: dockLinks.github,
    Icon: GithubIcon,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: dockLinks.linkedin,
    Icon: LinkedinIcon,
  },
] as const

export const Dock = () => {
  const [bouncing, setBouncing] = useState<string | null>(null)

  return (
    <nav className="dock" aria-label="Dock">
      {dockItems.map(({ id, label, href, Icon }) => (
        <a
          key={id}
          className={bouncing === id ? 'dock-item is-bouncing' : 'dock-item'}
          href={href}
          aria-label={label}
          onClick={() => {
            setBouncing(id)
            window.setTimeout(() => setBouncing(null), 700)
          }}
          onAnimationEnd={() => setBouncing(null)}
        >
          <Icon className="dock-icon" />
          <span className="dock-tooltip">{label}</span>
        </a>
      ))}
    </nav>
  )
}
