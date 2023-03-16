import { useState, useEffect } from "react";
function App() {
  const [text, setText] = useState("");
  const [characters, setCharacters] = useState(0);
  const [words, setWords] = useState(0);
  const [sentences, setSentences] = useState(0);
  const [paragraph, setParagraph] = useState(0);

  function count(text, pattern) {
    const matches = text.match(pattern);
    return matches ? matches.length : 0;
  }

  useEffect(() => {
    setCharacters(text.length);
    setWords(count(text.trim(), /\s+/g));
    setSentences(count(text, /[.?!]\s/g));
    setParagraph(count(text, /\n/g));
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
          Words: <span id="wordCount">{words}</span>
        </div>
      </div>
      <div className="output row">
        <div>
          Sentences: <span id="sentenceCount">{sentences}</span>
        </div>
        <div>
          Paragraphs: <span id="paragraphCount">{paragraph}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
