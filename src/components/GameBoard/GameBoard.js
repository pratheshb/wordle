import './GameBoard.css'
export default function GameBoard({backDropClass, guesses, validation}) {
    return(
        <main className={`game ${backDropClass}`}>
        {
          guesses.map((guess, index) => (
            <div key={index} className="guess-container">
              {
                [0, 1, 2, 3, 4].map(i => <div key={i} className={`uppercase ${validation[index][i]}`}>{guess && guess[i]}</div>)
              }
            </div>
          ))
        }
      </main>
    )
}