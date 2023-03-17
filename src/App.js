import { useState, useEffect } from "react";
function App() {
  const [text, setText] = useState("");
  const [characters, setCharacters] = useState(0);
  const [words, setWords] = useState(0);
  const [sentences, setSentences] = useState(0);
  const [paragraph, setParagraph] = useState(0);
  const [showLable, setShowLable] = useState(false);

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

  const handleCapCase = () => {
    const words = text.split(" ") || [];
    const capCase = words
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1).toLowerCase();
      })
      .join(" ");
    setText(capCase);
  };
  const handleCopyBtn = () => {
    navigator.clipboard.writeText(text);
    setShowLable(true);
    setTimeout(() => {
      setShowLable(false);
    }, 2000);
  };

  return (
    <div className="container">
      <h1>Word Counter</h1>
      <textarea
        placeholder="Enter your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="copy-wrap">
        <button className="copy-btn" onClick={handleCopyBtn}>
          Copy Text
        </button>
        {showLable && <span className="copyText">Copied!</span>}
      </div>
      <div className="button-wrapper">
        <h4>Case converter: </h4>
        <button className="btn-wc" onClick={() => setText(text.toUpperCase())}>
          Upper Case
        </button>
        <button className="btn-wc" onClick={() => setText(text.toLowerCase())}>
          Lower Case
        </button>
        <button className="btn-wc" onClick={handleCapCase}>
          Capitalized Case
        </button>
      </div>
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
