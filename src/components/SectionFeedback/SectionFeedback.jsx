import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
import { Statistics } from 'components/Statistics/Statistics';
import PropTypes from 'prop-types';

export const Section = ({
  title,
  good,
  bad,
  neutral,
  onLeaveFeedback,
  positivePercentage,
  total,
}) => {
  return (
    <>
      <h2>{title}</h2>
      <FeedbackOptions
        options={['good', 'bad', 'neutral']}
        onLeaveFeedback={onLeaveFeedback}
      ></FeedbackOptions>
      {total > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        ></Statistics>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
  onLeaveFeedback: PropTypes.func,
  positivePercentage: PropTypes.string,
  total: PropTypes.number,
};
