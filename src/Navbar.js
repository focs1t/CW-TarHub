import { Link, useMatch, useResolvedPath } from "react-router-dom"
import loginIcon from './img/login_icon.png';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <p>Tar</p>Hub
      </Link>
      <ul>
        <CustomLink to="/news">News</CustomLink>
        <CustomLink to="/quests">Quests</CustomLink>
      </ul>
      <ul className="login">
          <CustomLink to="/Login">
              <img src={loginIcon} alt=''/> Login
          </CustomLink>
      </ul>
    </nav>
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
