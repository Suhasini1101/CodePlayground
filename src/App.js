import React, { useState } from 'react';
import './App.css';
import Theme from './Theme';

function App() {
  const [html, setHtml] = useState('<h1>Hello, world!</h1>');
  const [css, setCss] = useState('h1 { color: blue; }');
  const [js, setJs] = useState('document.querySelector("h1").style.color = "red";');

  const handleRun = () => {
    const iframe = document.getElementById('output');
    const iframeDocument = iframe.contentDocument;
    const combinedCode = `
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>${html}</body>
        <script>${js}</script>
      </html>
    `;
    iframeDocument.open();
    iframeDocument.write(combinedCode);
    iframeDocument.close();
  };

  return (
    <div className="app">
      <header>
        <h1>Coding Playground</h1>
        
      </header>
      <Theme />
      <div className="container">
        <div className="code-editors">
          <div className="editor">
            <h2 >HTML</h2>
            <textarea value={html} onChange={(e) => setHtml(e.target.value)}></textarea>
          </div>
          <div className="editor">
            <h2>CSS</h2>
            <textarea value={css} onChange={(e) => setCss(e.target.value)}></textarea>
          </div>
          <div className="editor">
            <h2>JavaScript</h2>
            <textarea value={js} onChange={(e) => setJs(e.target.value)}></textarea>
            <button onClick={handleRun}>Run</button>
          </div>
        </div>
        <div className="output-container">
  <h2>Output</h2>
  <iframe id="output" title="output" className="output"></iframe>
</div>

      </div>
    </div>
  );
}

export default App;

