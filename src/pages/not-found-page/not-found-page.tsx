import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import styles from './not-found-page.module.css';

function NotFoundPage(): JSX.Element {
  return (
    <section className={`page ${styles.noPage}`}>
      <Helmet>
        <title>{'6 cities - Not Found'}</title>
      </Helmet>
      <h1 className="visually-hidden">404. Page not found</h1>
      <img className={`${styles.noPageImage}`} src="img/not-found-bg.jpg" alt="Not found page image" />
      <div className={`${styles.noPageContent}`}>
        <div className={`${styles.noPageText}`}>
          <img className={`${styles.noPageImageText}`} src="img/oops-bg.png" width={500} height={60} alt="Not found page image" />
          <p>Where are we?</p>
          <p>The page you are lookiing for was moved,<br/> removed, renamed or might never existed.</p>
        </div>
        <Link className={`${styles.noPageLink}`} to="/">go home</Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
