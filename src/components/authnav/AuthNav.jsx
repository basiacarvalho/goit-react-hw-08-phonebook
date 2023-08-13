import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import { useLocation } from 'react-router-dom';

export const AuthNav = () => {
  const location = useLocation();
  const isInLogin = location.pathname.includes('login');
  return (
    <div className={css.links}>
      {isInLogin ? (
        <>
          <NavLink className={css.link} to="/register">
            Register
          </NavLink>
          <NavLink className={css.linkActive} to="/login">
            Log In
          </NavLink>
        </>
      ) : (
        <>
          <NavLink className={css.linkActive} to="/register">
            Register
          </NavLink>
          <NavLink className={css.link} to="/login">
            Log In
          </NavLink>
        </>
      )}
    </div>
  );
};
