import { useState, useMemo } from 'react';
import { type WindowState } from '../Window';
import { type FolderId } from '../../../content';

const windowSize = { width: 560, height: 380 };

const useWindows = () => {
    const [windows, setWindows] = useState<WindowState[]>([]);
    const maxZ = useMemo(
      () => windows.reduce((z, win) => Math.max(z, win.z), 10),
      [windows],
    )

    const openWindow = (id: FolderId, origin: { x: number; y: number }) => {
        setWindows((current) => {
          const existing = current.find((win) => win.id === id)
          if (existing) {
            return current.map((win) =>
              win.id === id ? { ...win, z: maxZ + 1 } : win,
            )
          }
    
          const offset = current.length * 28
          const width = Math.min(windowSize.width, window.innerWidth - 48)
          const height = Math.min(windowSize.height, window.innerHeight - 150)
          return [
            ...current,
            {
              id,
              x: Math.max(24, 72 + offset),
              y: Math.max(48, 64 + offset),
              width,
              height,
              z: maxZ + 1,
              maximized: false,
              origin,
            },
          ]
        })
      };
    
      const closeWindow = (id: FolderId) => {
        setWindows((current) => current.filter((win) => win.id !== id))
      }
    
      const focusWindow = (id: FolderId) => {
        setWindows((current) =>
          current.map((win) => (win.id === id ? { ...win, z: maxZ + 1 } : win)),
        )
      }
    
      const moveWindow = (id: FolderId, x: number, y: number) => {
        setWindows((current) =>
          current.map((win) =>
            win.id === id
              ? {
                  ...win,
                  x: Math.max(8, Math.min(x, window.innerWidth - 80)),
                  y: Math.max(32, Math.min(y, window.innerHeight - 80)),
                }
              : win,
          ),
        )
      }
    
      const toggleMaximize = (id: FolderId) => {
        setWindows((current) =>
          current.map((win) =>
            win.id === id ? { ...win, maximized: !win.maximized, z: maxZ + 1 } : win,
          ),
        )
      }

    return { windows, openWindow, closeWindow, focusWindow, moveWindow, toggleMaximize };
};

export default useWindows;