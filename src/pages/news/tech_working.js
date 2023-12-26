import {Link, useMatch, useResolvedPath} from "react-router-dom";
import newsIcon1 from '../../img/WNK5jqTyHJ8.jpg';

export default function Tech_working() {
  return (
      <main>
        <ul className="breadcrumbs">
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/news">News</CustomLink>
          <CustomLink to="">Технические работы</CustomLink>
        </ul>
        <div className="main-container">
          <section className="page-header">
            <h1 className="title">Технические работы на сайте</h1>
          </section>
          <div className="article-page">
            <div className="article-page__content">
              <div className="article-page__preview">
                <img src={newsIcon1} alt="Технические работы на сайте"/>
                <p className="article__date">17.12.23</p>
              </div>
              <div>
                Сегодня в 19:30 по Москве сайт может работать не стабильно. Будет проходить смена хостера.
              </div>
            </div>
          </div>
        </div>
        <section className="news-comments-section">
          <div className="comments-section _not_logged">
            <div className="comments-section__title">
              6 комментариев
            </div>
            <div className="comments-section__form">
              <button datatype="login" className="comments-section__login-button">
                Авторизуйтесь
              </button>, чтобы добавить комментарий
            </div>
          </div>
        </section>
      </main>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
  )
}
