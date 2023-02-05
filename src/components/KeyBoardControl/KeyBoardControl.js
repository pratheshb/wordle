import './KeyBoardControl.css'
export default function KeyBoardControl({backDropClass, handleUserAction}) {
    const firstRowKeys = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
    const secondRowKeys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
    const thirdRowKeys = ['delete', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'enter'];
    return (
        <section className={`keyboard-control ${backDropClass}`}>
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