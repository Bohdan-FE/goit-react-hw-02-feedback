import { Component } from 'react';
import { Section } from './SectionFeedback/SectionFeedback';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((prevValue, number) => {return prevValue + number}, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return (
      Math.round((this.state.good / this.countTotalFeedback()) * 100) + '%'
    );
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section
          title='Please leave feedback'
        ></Section>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        ></FeedbackOptions>
        <Section
          title='Statistics'
        ></Section>
        {this.countTotalFeedback() > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        ></Statistics>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
      </>
    );
  }
}
