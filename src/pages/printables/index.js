import React from "react";
import style from "./index.module.scss"
import Footer from "../../components/footer";
import OtherNav from "../../components/nav/othernav";
import { ReactComponent as DownloadIcon } from "../../images/download.svg";

export default function Printables() {
  return (
    <React.Fragment>
      <OtherNav/>
      <div className={style.printablesContainer}>
        <section>
          <h2>Printables</h2>
          <p>A resource on starting an art drop in your area</p>
          <button className={style.buttons}>Download template<DownloadIcon/></button>
        </section>
      </div>
      <Footer/>
    </React.Fragment>
  );
}