import {Link} from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <section className="no-page"
      style={{
        width: '100vw',
        height: '100%',
        background: '#b8dce8',
        position: 'absolute'
      }}
    >
      <h1 className="visually-hidden">404. Page not found</h1>
      <img className="no-page__image" src="img/not-found-bg.jpg" alt="Not found page image"
        style={{
          width: '100%',
          maxHeight: '1100px',
          objectFit: 'contain'
        }}
      />
      <div className="no-page__content"
        style={{
          position: 'absolute',
          fontSize: '28px',
          top: '10%',
          left: '12%',
          padding: '30px'
        }}
      >
        <div className="no-page__text"
          style={{
            paddingBottom: '30px'
          }}
        >
          <img className="no-page__image" src="img/oops-bg.png" width={500} height={60} alt="Not found page image"
            style={{
              position: 'relative',
              left: '-8%'
            }}
          />
          <p>Where are we?</p>
          <p>The page you are lookiing for was moved,<br/> removed, renamed or might never existed.</p>
        </div>
        <Link className="no-page__link" to="/"
          style={{
            padding: '20px',
            background: '#5c84cf',
            borderRadius: '10px',
            boxShadow: '4px 3px 5px rgb(82, 86, 170, 0.5)'
          }}
        >go home
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
