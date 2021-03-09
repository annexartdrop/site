import React from "react";
import style from "./index.module.scss"
import Footer from "../../components/footer";
import OtherNav from "../../components/nav/othernav";

export default function Contribute() {
  return (
    <React.Fragment>
      <OtherNav/>
      <div className={style.aboutContainer}>
        <section>
          <h2>Contribute</h2>
          <p>This project is sustained &amp; driven by the community. Inspired by @sentientmoss’ @wabashartdrop project, the Annex holds the same mission.</p>
          <p>By using recycled newspaper stands (either donated by companies or scouted by city affiliates) “we are able to reduce trash on the street while simultaneously encouraging visual art and making it an accessible project for anyone wanting to get involved regardless of their financial situation.” </p>
        </section>
        <section>
          <h2>For Your Visit</h2>
          <p>We suggest bringing along a few things!</p>
        </section> 
      </div>
      <Footer/>
    </React.Fragment>

  );
}