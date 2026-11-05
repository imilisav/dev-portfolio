import { useState } from 'react';
import './App.css';
import { Dock } from './components/Dock';
import { Folder } from './components/Folder';
import { MenuBar } from './components/MenuBar';
import { Window } from './components/window/Window';
import { folders, type FolderId } from './content';
import ContentRenderer from './components/window/ContentRenderer';
import useWindows from './components/window/hooks/useWindows';

const App = () => {
  const [selectedFolder, setSelectedFolder] = useState<FolderId | null>(null);
  const {
    windows,
    openWindow,
    closeWindow,
    focusWindow,
    moveWindow,
    toggleMaximize,
  } = useWindows();

  return (
    <div
      className="desktop"
      onPointerDown={(event) => {
        if (event.target === event.currentTarget) setSelectedFolder(null);
      }}
    >
      <MenuBar />
      <div className="desktop-icons">
        {folders.map((folder) => (
          <Folder
            key={folder.id}
            id={folder.id}
            name={folder.name}
            selected={selectedFolder === folder.id}
            onSelect={setSelectedFolder}
            onOpen={openWindow}
          />
        ))}
      </div>

      {windows.map((win) => {
        const folder = folders.find((item) => item.id === win.id);
        if (!folder) return null;
        return (
          <Window
            key={win.id}
            win={win}
            title={folder.name}
            onClose={closeWindow}
            onFocus={focusWindow}
            onMove={moveWindow}
            onToggleMaximize={toggleMaximize}
          >
            <ContentRenderer id={win.id} />
          </Window>
        );
      })}

      <Dock />
    </div>
  );
};

export default App;
