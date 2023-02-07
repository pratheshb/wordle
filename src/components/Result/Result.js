export default function Result({ backDropClass, currentGuess, isCorrect, solution }) {
    return (
        <>
            {
                isCorrect && <p className={backDropClass}>
                    Awesome!!! Your score is <strong>{6 - currentGuess + 1}</strong>
                </p>
            }
            {
                !isCorrect && currentGuess >= 6 && <p className={backDropClass}>
                    The correct word is <strong className='uppercase'>{solution}</strong>
                </p>
            }
        </>
    );
}