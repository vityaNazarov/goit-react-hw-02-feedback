import css from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={css.feedbackForm__buttons}>
      {options.map(option => {
        return (
          <button
            key={option}
            className={css.feedbackForm__btn}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default FeedbackOptions;
