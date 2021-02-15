import React from "react";
import style from "./index.module.scss"
import Footer from "../../components/footer";
import OtherNav from "../../components/nav/othernav";
import store from "../../database";

export default function About() {
  return (
    <React.Fragment>
      <OtherNav/>
      <div className={style.aboutContainer}>
        <h2>About</h2>
        <p>{store.aboutPage.text}</p>
      </div>
      <Footer/>
    </React.Fragment>

  );
}