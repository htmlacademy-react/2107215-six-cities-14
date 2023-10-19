import {Link} from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <section className="no-page">
      <h1 className="visually-hidden">404. Page not found</h1>
      <img className="no-page__image" src="img/not-found-bg.jpg" alt="Not found page image" />
      <div className="no-page__content">
        <div className="no-page__text">
          <img className="no-page__image-text" src="img/oops-bg.png" width={500} height={60} alt="Not found page image" />
          <p>Where are we?</p>
          <p>The page you are lookiing for was moved,<br/> removed, renamed or might never existed.</p>
        </div>
        <Link className="no-page__link" to="/">go home</Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
