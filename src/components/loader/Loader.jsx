import { Circles } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.backdrop}>
      <div className={css.loader}>
        <Circles
          height="80"
          width="80"
          color="#757575"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </div>
  );
};
