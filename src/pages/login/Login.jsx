import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/loginform/LoginForm';
import css from './Login.module.css';

const Login = () => {
  return (
    <div className={css.section}>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
};

export default Login;
