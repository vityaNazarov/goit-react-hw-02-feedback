import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p className={css.feedbackForm__statistic_name}>Good: {good}</p>
      <p className={css.feedbackForm__statistic_name}>Neutral: {neutral}</p>
      <p className={css.feedbackForm__statistic_name}>Bad: {bad}</p>
      <p className={css.feedbackForm__statistic_name}>Total: {total}</p>
      <p className={css.feedbackForm__statistic_name}>
        Positive feedback: {positivePercentage}%
      </p>
    </div>
  );
};

export default Statistics;
