import styles from './loading.module.css';

function Loading(): JSX.Element {
  return (
    <section className="loading">
      <p className={`${styles.loadingMsg}`}>Loading ...</p>
    </section>
  );
}

export default Loading;
