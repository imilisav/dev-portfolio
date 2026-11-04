import { useEffect, useRef, type PointerEvent, type ReactNode } from 'react'
import type { FolderId } from '../../content'

export type WindowState = {
  id: FolderId
  x: number
  y: number
  width: number
  height: number
  z: number
  maximized: boolean
  origin: { x: number; y: number }
}

type WindowProps = {
  win: WindowState
  title: string
  children: ReactNode
  onClose: (id: FolderId) => void
  onFocus: (id: FolderId) => void
  onMove: (id: FolderId, x: number, y: number) => void
  onToggleMaximize: (id: FolderId) => void
}

export const Window = ({
  win,
  title,
  children,
  onClose,
  onFocus,
  onMove,
  onToggleMaximize,
}: WindowProps) => {
  const drag = useRef<{
    pointerId: number
    offsetX: number
    offsetY: number
  } | null>(null)

  useEffect(() => {
    return () => {
      drag.current = null
    }
  }, [])

  const startDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (win.maximized) return
    if ((event.target as HTMLElement).closest('button')) return
    onFocus(win.id)
    drag.current = {
      pointerId: event.pointerId,
      offsetX: event.clientX - win.x,
      offsetY: event.clientY - win.y,
    }
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const moveDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (!drag.current || drag.current.pointerId !== event.pointerId) return
    onMove(
      win.id,
      event.clientX - drag.current.offsetX,
      event.clientY - drag.current.offsetY,
    )
  }

  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (!drag.current || drag.current.pointerId !== event.pointerId) return
    drag.current = null
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }

  const style = win.maximized
    ? {
        top: 'var(--menubar-h)',
        left: 8,
        width: 'calc(100vw - 16px)',
        height: 'calc(100vh - var(--menubar-h) - 92px)',
        zIndex: win.z,
        ['--origin-x' as string]: `${win.origin.x}px`,
        ['--origin-y' as string]: `${win.origin.y}px`,
      }
    : {
        top: win.y,
        left: win.x,
        width: win.width,
        height: win.height,
        zIndex: win.z,
        ['--origin-x' as string]: `${win.origin.x}px`,
        ['--origin-y' as string]: `${win.origin.y}px`,
      }

  return (
    <section
      className={win.maximized ? 'finder-window is-maximized' : 'finder-window'}
      style={style}
      onPointerDown={() => onFocus(win.id)}
      aria-label={title}
    >
      <div
        className="finder-titlebar"
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onDoubleClick={() => onToggleMaximize(win.id)}
      >
        <div className="traffic-lights">
          <button
            type="button"
            className="traffic close"
            aria-label={`Close ${title}`}
            onClick={() => onClose(win.id)}
          />
          <button
            type="button"
            className="traffic minimize"
            aria-label={`Minimize ${title}`}
            onClick={() => onClose(win.id)}
          />
          <button
            type="button"
            className="traffic zoom"
            aria-label={`Zoom ${title}`}
            onClick={() => onToggleMaximize(win.id)}
          />
        </div>
        <h2 className="finder-title">{title}</h2>
      </div>
      <div className="finder-toolbar">
        <span className="finder-nav" aria-hidden="true">
          ‹ ›
        </span>
        <span className="finder-path">{title}</span>
      </div>
      <div className="finder-body">{children}</div>
    </section>
  )
}