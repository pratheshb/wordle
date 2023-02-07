import './GameBoard.css'
export default function GameBoard({ backDropClass, guesses, solution, currentGuess }) {
  return (
    <main className={`game ${backDropClass}`}>
      {
        guesses.map((guess, index) => (
          <div key={index} className="guess-container">
            {
              [0, 1, 2, 3, 4].map(i => {
                let validator = '';
                if (index < currentGuess) {
                  if (guess[i] === solution[i]) {
                    validator = 'correct';
                  } else if (solution.includes(guess[i])) {
                    validator = 'partially-correct';
                  } else {
                    validator = 'in-correct'
                  }
                }
                return (
                  <div key={i} className={`uppercase ${validator}`}>
                    {guess && guess[i]}
                  </div>
                )
              })
            }
          </div>
        ))
      }
    </main>
  )
}