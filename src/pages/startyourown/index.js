import React from "react";
import style from "./index.module.scss"
import Footer from "../../components/footer";
import OtherNav from "../../components/nav/othernav";

export default function StartYourOwn() {
  return (
    <React.Fragment>
      <OtherNav/>
      <div className={style.syoContainer}>
        <section>
          <h2>Start Your Own</h2>
          <p>A resource on starting your own box in your area</p>
        </section>
      </div>
      <Footer/>
    </React.Fragment>
  );
}