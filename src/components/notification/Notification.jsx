import css from './Notification.module.css';

const Notification = ({ title }) => (
  <p className={css.feedbackForm__notification}>{title}</p>
);

export default Notification;
