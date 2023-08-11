import css from './Error.module.css';
import { useSelector } from 'react-redux';
import { selectError } from 'redux/contacts/selectors';

export const Error = () => {
  const error = useSelector(selectError);
  return (
    <div className={css.backdrop}>
      <div className={css.container}>
        <p className={css.text}>{error}</p>
      </div>
    </div>
  );
};
