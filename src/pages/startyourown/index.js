import React from "react";
import style from "./index.module.scss"
import Footer from "../../components/footer";
import OtherNav from "../../components/nav/othernav";
import { ReactComponent as DownloadIcon } from "../../images/download.svg";
import { ReactComponent as Copy } from "../../images/copy.svg";

export default function StartYourOwn() {

  const boxTemplate = 
  `Subject: Inquiry About Unused Boxes - Possible Donation
 
Hello, 

My name is [firstname lastname] and I am reaching out to see if [your group] would be interested in donating one of your old and unused newspaper boxes to a community engagement project. I am an [job/passion/occupational title] from [City, STATE] and have been co-working on the project, “The Wabash Art Drop”. The Art Drops follow the same general concept of the “little free libraries” with its take one, leave one functionality; promoting community building through free art exchange. We have been rolling out these boxes in various parts of the country, and were hoping to bring it to the community in [city you’re bringing the box to] next! 

This project has been a huge success in Chicago, and I am reaching out in hopes that you would be willing to help move this project forward by donating a box to us! 
Here is a link to the instagram page for the current box located in Downtown Chicago. The impact of the Wabash Art Drop has allowed collaboration within the arts and urban community. You’ll see highlights of this engagement and impact, saved in the “Swaps and Shares” saved stories at the top of the page. 
  
Thank you so much for your consideration,
[firstname lastname]
--
[firstname lastname]
[your phone number]
@wabashartdrop`

  return (
    <React.Fragment>
      <OtherNav/>
      <div className={style.syoContainer}>
        <section>
          <h2>Start Your Own</h2>
          <p>A resource on starting an art drop in your area</p>
        </section>
        <section>
          <h2>Finding Boxes Email<span className={style.copyIcon} onClick={() => {navigator.clipboard.writeText(boxTemplate)}}><Copy/></span></h2>
        </section>
        <section>
          <h2>Location Sponsor<span className={style.copyIcon} onClick={() => {navigator.clipboard.writeText(boxTemplate)}}><Copy/></span></h2>
        </section>
      </div>
      <Footer/>
    </React.Fragment>
  );
}