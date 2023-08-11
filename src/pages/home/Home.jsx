import css from './Home.module.css';
import { Phone } from 'grommet-icons';

const Home = () => {
  return (
    <main className={css.container}>
      <h1 className={css.title}>Phone book manager</h1>
      <Phone size="xlarge" />
      <h2 className={css.subtitle}>Welcome</h2>
    </main>
  );
};

export default Home;
