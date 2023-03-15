import { useState, useEffect } from "react";
function App() {
  const [text, setText] = useState("");
  const [characters, setCharacters] = useState(0);
  useEffect(() => {
    setCharacters(text.length);
  }, [text]);
  return (
    <div className="container">
      <h1>Word Counter</h1>
      <textarea
        placeholder="Enter your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="output row">
        <div>
          Characters: <span id="characterCount">{characters}</span>
        </div>
        <div>
          Words: <span id="wordCount">0</span>
        </div>
      </div>
      <div className="output row">
        <div>
          Sentences: <span id="sentenceCount">0</span>
        </div>
        <div>
          Paragraphs: <span id="paragraphCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default App;
