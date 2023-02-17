import './Hint.css';
import 'wicg-inert';
import { useEffect, useRef } from 'react';
export default function Hint({showHint, setShowHint}) {
    const hintRef = useRef(null);
    useEffect(() => {
      hintRef.current.inert = !showHint;
    }, [hintRef, showHint]);
    return (
        <section ref={hintRef} className={`hint-container ${showHint ? 'show' : ''}`}>
        <div className='close-icon-container'>
          <button type="button" onClick={() => setShowHint(false)} aria-label="Close">x</button>
        </div>
        <h2>How to play</h2>
        <p>Guess the five letter word in 6 tries</p>
        <p>The color of tile will guide you how close your guess was</p>
        <p> <span aria-label="color green" className='color-indicator correct'></span> The letter is in the word and in the correct spot</p>
        <p> <span aria-label="color yellow" className='color-indicator partially-correct'></span>  The letter is in the word but in the wrong spot</p>
        <p> <span aria-label="color red" className='color-indicator in-correct'></span> The letter is not in the word</p>
      </section>
    );
}