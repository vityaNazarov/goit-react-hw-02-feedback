import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={css.feedbackForm}>
      <h2 className={css.feedbackForm__title}>{title} </h2>
      {children}
    </div>
  );
};

export default Section;
