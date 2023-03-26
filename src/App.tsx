import './App.css';
import FileViewer from 'src/components/FileViewer/FileViewer';
import { FileViewerType } from './components/FileViewer/fileViewerTypes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Git diff
        </p>
      </header>
      <main className="App-main">
        <FileViewer fileViewer={FileViewerType.Split} />
      </main>
      <footer className="App-footer">© 2023</footer>
    </div>
  );
}

export default App;
