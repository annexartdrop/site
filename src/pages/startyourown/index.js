import React from "react";
import style from "./index.module.scss"
import Footer from "../../components/footer";
import OtherNav from "../../components/nav/othernav";
import { ReactComponent as DownloadIcon } from "../../images/download.svg";

export default function StartYourOwn() {
  return (
    <React.Fragment>
      <OtherNav/>
      <div className={style.syoContainer}>
        <section>
          <h2>Start Your Own</h2>
          <p>A resource on starting an art drop in your area</p>
          <button className={style.buttons}>Download template<DownloadIcon/></button>
        </section>
      </div>
      <Footer/>
    </React.Fragment>
  );
}