import './KeyBoardControl.css';
import 'wicg-inert';
import { useEffect, useRef } from 'react';
export default function KeyBoardControl({ backDropClass, handleUserAction }) {
  const keyboardControlRef = useRef(null);
  const firstRowKeys = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
  const secondRowKeys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
  const thirdRowKeys = ['delete', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'enter'];

  useEffect(() => {
    keyboardControlRef.current.inert = !!backDropClass;
  }, [keyboardControlRef, backDropClass]);

  return (
    <section ref={keyboardControlRef} className={`keyboard-control ${backDropClass}`}>
      <div className='row'>
        {
          firstRowKeys.map(letter => (
            <button
              key={letter}
              className="uppercase"
              type="button"
              onClick={() => handleUserAction(letter)}
            >
              {letter}
            </button>
          ))
        }
      </div>
      <div className='row'>
        {
          secondRowKeys.map(letter => (
            <button
              key={letter}
              className="uppercase"
              type="button"
              onClick={() => handleUserAction(letter)}
            >
              {letter}
            </button>
          ))
        }
      </div>
      <div className='row'>
        {
          thirdRowKeys.map(letter => (
            <button
              key={letter}
              className="uppercase"
              type="button"
              onClick={() => handleUserAction(letter)}
            >
              {letter}
            </button>
          ))
        }
      </div>
    </section>
  )
}