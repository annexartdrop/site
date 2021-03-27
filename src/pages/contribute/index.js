import React from "react";
import style from "./index.module.scss"
import Footer from "../../components/footer";
import OtherNav from "../../components/nav/othernav";

export default function Contribute() {
  return (
    <React.Fragment>
      <OtherNav/>
      <div className={style.contributeContainer}>
        <div className={style.pageCopy}>
          <section>
            <h2>Contribute</h2>
            <p>Come thru @ 534 SW Jackson St. Portland, OR 97201. For your visit, we recommend bringing along some of your own work &amp; any sticker blanks or art supply donations that can support other marginalized or homeless artists.</p>
          </section>
          <section>
            <h2>COVID-19 Info</h2>
            <p>We'll be following COVID-19 safe practices throughout the year 2021. As such, we are not actively encouraging visiting during this time. BUT Annex will still serve as a virtual arts space for the community. Tag us in your WIPs or final works on Instagram with the hashtag #annexartdrop.</p>
          </section>
        </div>
      </div>
      <Footer/>
    </React.Fragment>

  );
}