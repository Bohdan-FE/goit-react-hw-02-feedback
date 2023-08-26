import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options: [good, bad, neutral], onLeaveFeedback }) => {
    return <div>
        <button type="button" onClick={onLeaveFeedback} option={good}>Good</button>
        <button type="button" onClick={onLeaveFeedback} option={neutral}>Neutral</button>
        <button type="button" onClick={onLeaveFeedback} option={bad}>Bad</button>
    </div>
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
}