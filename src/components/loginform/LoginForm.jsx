import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input className={css.formDetail} type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input
          className={css.formDetail}
          type="password"
          name="password"
          pattern="^.{7,}$"
          title="Password must contain at least 7 characters."
          required
        />
      </label>
      <button className={css.button} type="submit">
        Log In
      </button>
    </form>
  );
};
