import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../store/actions/counterActions";
import type { AppDispatch, RootState } from "../store/store";
import styles from "./Counter.module.css";

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <section className={styles.card} aria-labelledby="counter-heading">
      <div className={styles.cardHeader}>
        <span className={styles.label}>Live Redux state</span>
        <span className={styles.pill}>counter.value</span>
      </div>
      <h2 id="counter-heading" className={styles.value} aria-live="polite">
        {count}
      </h2>
      <p className={styles.caption}>Every action is dispatched to the store and reflected here.</p>
      <div className={styles.controls}>
        <button className={styles.secondaryButton} type="button" onClick={() => dispatch(decrement())}>
          <span aria-hidden="true">−</span> Decrement
        </button>
        <button className={styles.primaryButton} type="button" onClick={() => dispatch(increment())}>
          <span aria-hidden="true">+</span> Increment
        </button>
      </div>
      <button className={styles.resetButton} type="button" onClick={() => dispatch(reset())}>
        Reset counter
      </button>
    </section>
  );
}

export default Counter;
