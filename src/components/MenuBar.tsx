import { useEffect, useState } from 'react'
import {
  BatteryIcon,
  ControlCenterIcon,
  SearchIcon,
  WifiIcon,
} from './icons'

const menus = ['Ilija Milisav', 'Software Engineer']

export const MenuBar = () => {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(id)
  }, [])

  const time = new Intl.DateTimeFormat(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(now)

  return (
    <header className="menubar">
      <nav className="menubar-left" aria-label="Desktop menus">
        {menus.map((item) => (
          <span key={item} className="menubar-item">
            {item}
          </span>
        ))}
      </nav>
      <div className="menubar-right">
        <ControlCenterIcon className="menubar-status" />
        <SearchIcon className="menubar-status" />
        <WifiIcon className="menubar-status" />
        <BatteryIcon className="menubar-battery" />
        <time dateTime={now.toISOString()}>{time}</time>
      </div>
    </header>
  )
}
