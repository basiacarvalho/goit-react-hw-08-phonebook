import css from './Home.module.css';
import { Phone } from 'grommet-icons';

const Home = () => {
  return (
    <main className={css.section}>
      <div className={css.container}>
        <h1 className={css.title}>Welcome to Phone Book Manager</h1>
        <div className={css.icon_container}>
          <Phone
            className={css.icon}
            size="xlarge"
            color="#757575"
            shadow="-2px -1px 12px rgba(61, 59, 59, 0.59)"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
