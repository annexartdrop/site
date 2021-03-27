import React from "react";
import style from "./index.module.scss"
import Footer from "../../components/footer";
import OtherNav from "../../components/nav/othernav";
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

  const sponsorTemplate = 
  `Hi [firstname lastname of person you’re contacting] 👋
 
I'm [firstname lastname], a [job/passion/occupational title] based in [city ur from]. I’ve been collaborating on a project called the “Wabash Art Drop”––these art drops follow the same concept of the “little free libraries” with their take one, leave one functionality. The project also works to promote community building through free art exchange. We have been rolling out these boxes in various parts of the country, and we are in the final steps of bringing it to [the city you’re bringing the box to]! 
   
Similar to Chicago, the City of Portland requires each box to have a name and number attached to it. We have our original box sponsored with Columbia College Chicago’s Office of Student Affairs. So in order to get the box recognized by the city, we would just need your last bit of help.
I am reaching out in hopes that the [business / school you’d be requesting a sponsor from] would be willing to help sponsor the box. We would only need the box to be sponsored with a contact number; for example, our current box has the contact number for the Student Affairs office.
The upkeep of the box will be taken care of by the community (cleaning, ensuring it meets city regulations, etc.). I will be traveling to [the city you’re bringing the box to] in the month of January, and plan on setting up the box with several PSUGD students. 
   
Please let me know if getting the office’s number on the box would be possible! We would love to have the box in front of the [business you’re contacting] or in the surrounding area––for use by not only [city artists], but also for any surrounding [colleges or visiting artists]. 
   
Thank you for your consideration,
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
          <h2>1) Scout your location</h2>
          <ul>
            <li>decide where you can legally and safely install an artbox!</li>
            <li>check your city’s regulations on publication boxes</li>
            <li>for example, in the city of Portland a box:</li>
            <li>couldn’t be located 6 ft from an electricity cover, driveway, or bus stop</li>
            <li>must be 2 ft from the curb</li>
            <li>must have an address, organization name, and phone # on it</li>
          </ul>
        </section>
        <section>
          <h2>1a) Location Tips</h2>
          <ul>
            <li>we recommend somewhere near a public fence or streetpole (to secure it)</li>
            <li>accessible to artists &amp; the community, and keep others’ abilities in mind! (For example, keep it wheelchair accessible.)</li>
            <li>some great places:</li>
            <li>Outside a family / employee owned art shop</li>
            <li>Near local galleries</li>
            <li>In a university district</li>
          </ul>
        </section>
        <section>
          <h2>2&#41; Find a Box</h2>
          <p>No leads on a box? Here’s where we started for @annexartdrop</p>
          <ul>
            <li>We went to google maps to scout out newspaper companies in the area</li>
            <li>Wrote down all those newspaper companies</li>
            <li>Found &amp; contacted editors/distribution managers of those companies</li>
            <li>Template down below!</li>
          </ul>
        </section>
        <section>
          <h2>Finding Boxes Email<span className={style.copyIcon} onClick={() => {navigator.clipboard.writeText(boxTemplate)}}><Copy/></span></h2>
        </section>
        <section>
          <h2>And if you get ghosted -</h2>
          <ul>
            <li>check out GovDeals.com, old boxes go up for ~$30</li>
            <li>boxes for free? call your city’s junkyard</li>
            <li>You can also look around, find a beat up newspaper box, contact your city &amp; if it meets an abandoned box criteria, see if the city allows you to take it …</li>
          </ul>
        </section>
        <section>
          <h2>3&#41; Box Located, Time to Acquire </h2>
          <ul>
            <li>Make sure you have a way to transport the box</li>
            <li>If you or a friend don’t have a car, check to see if your city’s transportation allows for bigger objects on busses or trains</li>
          </ul>
        </section>
        <section>
          <h2>Location Sponsor<span className={style.copyIcon} onClick={() => {navigator.clipboard.writeText(sponsorTemplate)}}><Copy/></span></h2>
        </section>
      </div>
      <Footer/>
    </React.Fragment>
  );
}