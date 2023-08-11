import { setFilter } from 'redux/filterSlice';
import css from './SearchFilter.module.css';
import { useDispatch } from 'react-redux';

export const SearchFilter = () => {
  const dispatch = useDispatch();

  const handleFilter = evt => {
    const filter = evt.target.value;
    dispatch(setFilter(filter));
  };

  return (
    <label className={css.searchForm__label}>
      Find contacts by name{' '}
      <input
        className={css.searchForm__nameDetail}
        type="text"
        name="filter"
        onChange={handleFilter}
      ></input>
    </label>
  );
};
