import React from "react";
import style from "./index.module.scss"
import Footer from "../../components/footer";
import OtherNav from "../../components/nav/othernav";

export default function About() {
  return (
    <React.Fragment>
      <OtherNav/>
      <div className={style.aboutContainer}>
        <section>
          <h2>About</h2>
          <p>This project is sustained &amp; driven by the community. Inspired by @sentientmoss’ @wabashartdrop project, the Annex holds the same mission.</p>
          <p>By using recycled newspaper stands (either donated by companies or scouted by city affiliates) “we are able to reduce trash on the street while simultaneously encouraging visual art and making it an accessible project for anyone wanting to get involved regardless of their financial situation.” </p>
        </section>
        <section>
          <h2>we hate autocorrect and love aave &amp; pidgin creole.</h2>
          <p>Yes, the “grammar” on this site is not perfect english. At Annex, we encourage &amp; embrace the language you grew up with. For us, its pidgin creole. We know the effects of “professionalism” on language erasure. When interacting with this space, we encourage you to use whatever language you’re comfortable with.</p>
        </section>
      </div>
      <Footer/>
    </React.Fragment>

  );
}