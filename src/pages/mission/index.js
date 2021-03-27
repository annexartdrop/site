import React from "react";
import style from "./index.module.scss"
import Footer from "../../components/footer";
import OtherNav from "../../components/nav/othernav";
import PhotoSlide from "../../components/photoSlide";
import Test from "../../images/annexportrait.jpeg";

export default function Mission() {
  return (
    <React.Fragment>
      <div className={style.missionContainer}>
        <OtherNav/>
        <div className={style.missionCopy}>
          <section>
            <h2>Mission</h2>
            <p>Hey we’re the Annex Art Drop, we’re a community run art drop located in downtown Portland, OR. As a sister drop of a @sentientmoss @wabashartdrop, we serve as a public engagement space for Portland’s art community.</p>
            <p>By using recycled newspaper stands (either donated by companies or scouted by city affiliates) “we are able to reduce trash on the street while simultaneously encouraging visual art and making it an accessible project for anyone wanting to get involved regardless of their financial situation.” </p>
          </section>
          <PhotoSlide image1={Test}/>
          <section>
            <h2>we hate autocorrect and love aave &amp; pidgin creole.</h2>
            <p>Yes, the “grammar” on this site is not perfect english. At Annex, we encourage &amp; embrace the language you grew up with. For us, its pidgin creole. We know the effects of “professionalism” on language erasure. When interacting with this space, we encourage you to use whatever language you’re comfortable with.</p>
          </section>
          <section>
            <h2>Land Acknowledgement</h2>
            <p>Portland rests on traditional village sites of the Multnomah, Kathlamet, Clackamas, Chinook, Tualatin Kalapuya, Molalla and many other Tribes who made their homes along the Columbia River. We take this opportunity to thank the original caretakers of this land. Please join us in our acknowledgement of the land we find ourselves in.</p>
          </section>
          <section className={style.lastText}>
            <h2>@annexartdrop is organized by two indigenous gay women</h2>
          </section>
        </div>
      </div>
      <Footer/>
    </React.Fragment>

  );
}