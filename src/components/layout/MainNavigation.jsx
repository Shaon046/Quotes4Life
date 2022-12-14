import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Quotes4Life</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/quotes">All Quotes</NavLink>
          </li>
          <li>
            <NavLink to="/new-quote">Add a Quotes</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
