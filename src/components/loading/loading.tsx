import styles from './loading.module.css';

function Loading(): JSX.Element {
  return (
    <section className="loading">
      <h2 className="visually-hidden">Loading</h2>
      <p className={`${styles.loadingMsg}`}>Loading...</p>
    </section>
  );
}

export default Loading;
