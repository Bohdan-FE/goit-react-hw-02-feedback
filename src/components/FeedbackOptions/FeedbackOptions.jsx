export const FeedbackOptions = ({handleGood, handleBad, handleNeutral}) => {
    return <div>
        <button type="button" onClick={handleGood}>Good</button>
        <button type="button" onClick={handleNeutral}>Neutral</button>
        <button type="button" onClick={handleBad}>Bad</button>
    </div>
}