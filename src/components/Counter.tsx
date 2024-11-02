import { useAppDispatch, useAppSelector } from '../app/hooks';
import { increment, decrement, reset, fetchRandomNumber } from '../features/counter/CounterSlice';
import styles from './Counter.module.css';
import CustomButton from './CustomButton';

const Counter: React.FC = () => {
  const { value, loading, error } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.counterContainer}>
      <h1 className={styles.count}>{value}</h1>
      <div>
        <CustomButton title="Increment" onClick={() => dispatch(increment())} color="#4CC9FE" disabled={false} />
        <CustomButton title="Decrement" onClick={() => dispatch(decrement())} color="#4CC9FE" disabled={false} />
      </div>
      <CustomButton
        onClick={() => dispatch(fetchRandomNumber())}
        title="Fetch Random Numbers"
        disabled={loading}
        color="#F09319"
      />
      {loading && <p className={styles.loading}>loading...</p>}
      {error && <p className={styles.error}>{error}</p>}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          dispatch(reset());
        }}
      >
        Reset
      </a>
    </div>
  );
};

export default Counter;
