import React from 'react';
// import PropTypes from 'prop-types';
import css from './feedback.module.css';

class Feedback extends React.Component {
  //   static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    PositiveFeedback: 0,
  };

  countPositiveFeedbackPercentage = () => {};

  handleClickGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
      total: prevState.total + 1,
    }));
  };

  handleClickNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
      total: prevState.total + 1,
    }));
  };

  handleClickBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
      total: prevState.total + 1,
    }));
  };

  render() {
    return (
      <div className={css.feedbackForm}>
        <h1 className={css.feedbackForm__title}>Please leave feedback</h1>
        <div className={css.feedbackForm__buttons}>
          <button type="button" onClick={this.handleClickGood}>
            Good
          </button>
          <button type="button" onClick={this.handleClickNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.handleClickBad}>
            Bad
          </button>
        </div>
        <div className={css.feedbackForm__statistic}>
          <h2 className={css.feedbackForm__statistic_title}>Statistics</h2>
          <p className={css.feedbackForm__statistic_name}>
            Good: {this.state.good}
          </p>
          <p className={css.feedbackForm__statistic_name}>
            Neutral: {this.state.neutral}
          </p>
          <p className={css.feedbackForm__statistic_name}>
            Bad: {this.state.bad}
          </p>
          <p className={css.feedbackForm__statistic_name}>
            Total: {this.state.total}
          </p>
          <p className={css.feedbackForm__statistic_name}>
            Positive feedback: {this.state.PositiveFeedback}%
          </p>
        </div>
      </div>
    );
  }
}

export default Feedback;
