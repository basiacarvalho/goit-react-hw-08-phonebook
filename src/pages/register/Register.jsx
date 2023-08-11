import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/registerform/RegisterForm';
import css from './Register.module.css';

const Register = () => {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
};

export default Register;
