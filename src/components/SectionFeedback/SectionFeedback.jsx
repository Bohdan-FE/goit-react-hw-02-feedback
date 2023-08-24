import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Component } from 'react';

export class Section extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
      this.setState(prevState => ({ good: prevState.good + 1}));
  };
  handleNeutral = () => {
      this.setState(prevState => ({ neutral: prevState.neutral + 1}));
  };
  handleBad = () => {
      this.setState(prevState => ({ bad: prevState.bad + 1}));
    };
    
    countTotalFeedback = () => {
       return this.state.good + this.state.bad + this.state.neutral
    }
    countPositiveFeedbackPercentage = () => { 
        return Math.round((this.state.good/(this.countTotalFeedback()) * 100)) + '%'
    }

  render() {
      const { good, neutral, bad } = this.state;
    return (
      <>
        <FeedbackOptions handleGood={this.handleGood} handleBad={this.handleBad} handleNeutral={this.handleNeutral}></FeedbackOptions>
            <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={ this.countPositiveFeedbackPercentage()}
        ></Statistics>
      </>
    );
  }
}
