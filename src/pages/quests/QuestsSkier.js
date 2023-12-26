import {Link, useMatch, useResolvedPath} from "react-router-dom";
import newsIcon1 from "../../img/WNK5jqTyHJ8.jpg";

export default function QuestsSkier() {
  return (
      <main>
        <style>
          {`
          .trader:nth-child(3) {
            color: #ECB263;
            border: 1px solid #ECB263;
          }
        `}
        </style>
        <ul className="breadcrumbs">
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/news">Quests</CustomLink>
        </ul>
        <div className="main-container">
          <section className="page-header">
            <h1 className="title">Квесты Escape From Tarkov</h1>
          </section>
          <div className="traders-largh">
            <div className="prapor trader">
              <CustomLink to="/quests/prapor">
                Квесты Прапора
              </CustomLink>
            </div>
            <div className="therapist trader">
              <CustomLink to="/quests/therapist">
                Квесты Терапевта
              </CustomLink>
            </div>
            <div className="skier trader">
              <CustomLink to="/quests/skier">
                Квесты Лыжника
              </CustomLink>
            </div>
            <div className="peacekeeper trader">
              <CustomLink to="/quests/peacekeeper">
                Квесты Миротворца
              </CustomLink>
            </div>
            <div className="mechanic trader">
              <CustomLink to="/quests/mechanic">
                Квесты Механика
              </CustomLink>
            </div>
            <div className="ragman trader">
              <CustomLink to="/quests/ragman">
                Квесты Барахольщика
              </CustomLink>
            </div>
            <div className="jaeger trader">
              <CustomLink to="/quests/jaeger">
                Квесты Егеря
              </CustomLink>
            </div>
            <div className="fence trader">
              <CustomLink to="/quests/fence">
                Квесты Скупщика
              </CustomLink>
            </div>
            <div className="lightkeeper trader">
              <CustomLink to="/quests/lightkeeper">
                Квесты Смотрителя
              </CustomLink>
            </div>
          </div>
          <div className="articles">

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
