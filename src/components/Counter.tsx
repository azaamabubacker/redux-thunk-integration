import { useAppDispatch, useAppSelector } from '../app/hooks';
import { increment, decrement, reset } from '../features/counter/CounterSlice';
import styles from './Counter.module.css';

const Counter: React.FC = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1 className={styles.count}>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
