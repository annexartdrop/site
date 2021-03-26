import React from "react";
import style from "./index.module.scss"
import Footer from "../../components/footer";
import OtherNav from "../../components/nav/othernav";
import { ReactComponent as DownloadIcon } from "../../images/download.svg";
//Slaps
import Slaps from "../../images/AnnexSlapSheet.pdf";

export default function Printables() {

  return (
    <React.Fragment>
      <OtherNav/>
      <div className={style.printablesContainer}>
        <section>
          <h2>Printables</h2>
          <p>Sharing some of the Annex love, these are free resources for you to print on stickies, tee shirts, or whatever you like!</p>
        </section>
        <section className={style.downloadSections}>
          <h2>Slaps</h2>
          <a className={style.pdfDownload} href={Slaps}>Download PDF<DownloadIcon/></a>
        </section>
      </div>
      <Footer/>
    </React.Fragment>
  );
}