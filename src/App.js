import './App.css';
import { useEffect, useRef, useState } from 'react';
import Hint from './components/Hint/Hint';
import KeyBoardControl from './components/KeyBoardControl/KeyBoardControl';
import GameBoard from './components/GameBoard/GameBoard';
import Result from './components/Result/Result';
import 'wicg-inert';
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
function App() {
  const [words, setWords] = useState([]);
  const [solution, setSolution] = useState('');
  const [guesses, setGuesses] = useState(Array(6).fill(''));
  const [currentGuess, setCurrentGuess] = useState(0);
  const [showHint, setShowHint] = useState(true);
  const [isCorrect, setIsCorrect] = useState(false);
  const [theme, setTheme] = useState('light');
  const headerRef = useRef(null);
  const footerRef = useRef(null);
  const backDropClass = showHint ? 'blur' : '';

  useEffect(() => {
    let ignore = false;
    (async function () {
      const res = await fetch('/words.json');
      const data = await res.json();
      const words = data.words;
      if (!ignore) {
        setWords(words);
        setSolution(words[Math.floor(Math.random() * words.length)]);
      }
    })()
    return () => ignore = true;
  }, []);

  useEffect(() => {
    headerRef.current.inert = showHint;
    footerRef.current.inert = showHint;
  }, [headerRef, footerRef, showHint])

  useEffect(() => {
    function handleKeyUp(e) {
      if (e.target && e.target.type === 'button') {
        return;
      }
      handleUserAction(e.key.toLowerCase());
    }
    document.body.addEventListener('keyup', handleKeyUp);
    return () => document.body.removeEventListener('keyup', handleKeyUp)
  }, [guesses, currentGuess, showHint]);

  function handleUserAction(key) {
    if (showHint || isCorrect || currentGuess >= 6) {
      return;
    }
    const word = guesses[currentGuess].toLowerCase();
    if (/^[a-z]{1}$/.test(key)) {
      if (word.length > 5) {
        return;
      }
      setGuesses(guesses.map((guess, index) => (
        index === currentGuess ?
          guess + key : guess
      )))
    }
    if (key === 'enter') {
      if (word.length < 5) {
        return alert('Not Enough Letters');
      }
      setIsCorrect(word === solution);
      setCurrentGuess(currentGuess + 1);
    }

    if (key === 'backspace' || key === 'delete') {
      if (!word.length) {
        return;
      }
      setGuesses(guesses.map((guess, index) => (
        index === currentGuess ?
          guess.slice(0, -1) : guess
      )))
    }
  }

  function handleRefresh() {
    setSolution(words[Math.floor(Math.random() * words.length)]);
    setGuesses(Array(6).fill(''));
    setCurrentGuess(0);
    setIsCorrect(false);
  }

  return (
    <div className={`App ${theme}`}>
      <header ref={headerRef} className={`toolbar flex-end ${backDropClass}`}>
        <h1>Wordle <sup>copied</sup></h1>
        <nav>
          <button type="button" onClick={() => setShowHint(true)}>Help</button>
          <button type="button" onClick={handleRefresh}>Refresh</button>
          { theme === 'light' ? <MdOutlineDarkMode onClick={() => setTheme('dark')} /> : <MdOutlineLightMode onClick={() => setTheme('light')} />}
        </nav>
      </header>
      <GameBoard backDropClass={backDropClass} guesses={guesses} solution={solution} currentGuess={currentGuess} />
      <Result backDropClass={backDropClass} currentGuess={currentGuess} solution={solution} isCorrect={isCorrect} />
      <KeyBoardControl backDropClass={backDropClass} handleUserAction={handleUserAction} />
      <footer ref={footerRef} className={backDropClass}>
        <a rel="noopener noreferrer" href="https://www.nytimes.com/games/wordle" aria-label='External link to original game' target="_blank">Original Game</a>
      </footer>
      <Hint showHint={showHint} setShowHint={setShowHint} />
    </div>
  );
}

export default App;