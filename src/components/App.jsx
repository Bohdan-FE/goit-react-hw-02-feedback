import { Component } from 'react';
import { Section } from './SectionFeedback/SectionFeedback';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    this.setState(prevState => ({
      [e.target.getAttribute('option')]: prevState.good + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };
  countPositiveFeedbackPercentage = () => {
    return (
      Math.round((this.state.good / this.countTotalFeedback()) * 100) + '%'
    );
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Section
        title="Please leave feedback"
        good={good}
        neutral={neutral}
        bad={bad}
        total={this.countTotalFeedback()}
        positivePercentage={this.countPositiveFeedbackPercentage()}
        onLeaveFeedback={this.onLeaveFeedback}
      ></Section>
    );
  }
}
