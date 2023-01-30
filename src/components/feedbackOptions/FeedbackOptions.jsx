import css from '../feedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => {
    <div className={css.feedbackForm__buttons}>
      <button
        className={css.feedbackForm__btnGood}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    </div>;
  });
};

export default FeedbackOptions;
