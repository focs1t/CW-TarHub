import {Link, useMatch, useResolvedPath} from "react-router-dom";
import newsIcon1 from "../../img/WNK5jqTyHJ8.jpg";

export default function QuestsPrapor() {
  return (
      <main>
        <style>
          {`
          .trader:nth-child(1) {
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
            <article className="article">
              <Link to="/quests/prapor/proba_pera">
                <img src ={newsIcon1} alt="Первая новость" className="article-image"/>
              </Link>
              <Link to="/quests/prapor/proba_pera" className="article-title">
                Проба пера
              </Link>
              <div className="article-text">
                Ну, здравствуй, солдат. Что интересует? Бабки? Товар? А, работу,
                значит, ищешь... Не вопрос, будет тебе работа… когда покажешь,
                кто ты таков и чего ты...
              </div>
              <Link to="/quests/prapor/proba_pera" className="article-more">
                Читать далее
              </Link>
              <div className="article-tags">
                <div className="article-tag">Квест</div>
                <div className="article-tag">Прапор</div>
              </div>
            </article>
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
