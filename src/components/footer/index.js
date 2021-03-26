import style from "./index.module.scss";
import { ReactComponent as Hearts } from "../../images/peepoo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
  <footer className={style.footerContainer}>
    <div className={style.left}>
      <Hearts/>
      <div className={style.name}>@annexartdrop</div>
      <p>she/they in IG DM's</p>
    </div>
    <div className={style.right}>
      <ul>
        <h3>About</h3>
        <span className={style.ulSpacer}/>
        <li><Link to={"/mission"}>Mission</Link></li>
        <li><Link to={"/contribute"}>Contribute</Link></li>
        <li><Link to={"/printables"}>Printables</Link></li>
      </ul>
      <ul className={style.footerUL}>
        <h3>Resources</h3>
        <li><Link to={"/"}>Start your own</Link></li>
        <li><Link to={"/"}>@annexartdrop</Link></li>
        <li><Link to={"/"}>@wabashartdrop</Link></li>
      </ul>
    </div>
  </footer>
  );
}

export default Footer;