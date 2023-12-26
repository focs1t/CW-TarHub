import { Link, useMatch, useResolvedPath } from "react-router-dom"
import newsIcon1 from '../img/WNK5jqTyHJ8.jpg';

export default function News() {
  return (
      <main>
        <ul className="breadcrumbs">
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/news">News</CustomLink>
        </ul>
        <div className="main-container">
            <section className="page-header">
                <h1 className="title">Новости</h1>
            </section>
            <div className="news-list">
                <Link to="/news/tech_working">
                    <img src ={newsIcon1} alt="Первая новость" className="news-review"/>
                    <div className="news-title">
                        Первая новость
                    </div>
                    <div className="news-content">
                        Информация, которая находится в первой новости...
                    </div>
                    <p className="news-date">25.12.23</p>
                </Link>
            </div>
        </div>
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
