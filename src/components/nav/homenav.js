import React from "react";
import { Link } from "react-router-dom";
import style from "./index.module.scss";

export default class HomeNav extends React.Component {
  render() {
    return (
      <div className={style.fixedHome}>
        <nav className={style.mainNav}>
          <ul>
            <Link to={"/about"}>
              <li>Mission</li>
            </Link>
            <Link to={"/about"}>
              <li>Start Your Own</li>
            </Link>
            <Link to={"/about"}>
              <li>Friends</li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}