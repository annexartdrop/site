import React from "react";
import { Link } from "react-router-dom";
import style from "./index.module.scss";
import { ReactComponent as Hearts } from "../../images/peepoo.svg";

export default class OtherNav extends React.Component {
  render() {
    return (
      <div className={style.fixedOther}>
        <div className={style.siteLogo} id={style.heartSize}>
          <Link to={"/"}><Hearts/></Link>
        </div>
        <nav className={style.mainNav}>
          <ul>
            <Link to={"/mission"}>
              <li>Mission</li>
            </Link>
            <Link to={"/startyourown"}>
              <li>Start UR Own</li>
            </Link>
            <Link to={"/contribute"}>
              <li>Contribute</li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}