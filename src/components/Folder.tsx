import { FolderIcon } from './icons'
import type { FolderId } from '../content'

type FolderProps = {
  id: FolderId
  name: string
  selected: boolean
  onOpen: (id: FolderId, origin: { x: number; y: number }) => void
  onSelect: (id: FolderId) => void
}

export const Folder = ({
  id,
  name,
  selected,
  onOpen,
  onSelect,
}: FolderProps) => {
  return (
    <button
      type="button"
      className={selected ? 'desktop-folder is-selected' : 'desktop-folder'}
      onClick={(event) => {
        onSelect(id)
        const rect = event.currentTarget.getBoundingClientRect()
        onOpen(id, {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        })
      }}
    >
      <span className="desktop-folder-glyph">
        <FolderIcon />
      </span>
      <span className="desktop-folder-name">{name}</span>
    </button>
  )
}
