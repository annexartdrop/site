import React, { useEffect, useRef } from "react";
import style from "./index.module.scss"
import Ticker from "../../components/ticker";
import { ReactComponent as Hearts } from "../../images/peepoo.svg";
import { ReactComponent as Location } from "../../images/location.svg";
import HomeNav from "../../components/nav/homenav";
import gsap from "gsap";
import Background from "../../components";

export default function Home() {
  let heartRef = useRef(null);
  var timeline = gsap.timeline({ repeat: -1 });
  let backgroundRef = useRef(null);

  useEffect(() => {
    /*Background Ref*/
    gsap.to(backgroundRef.current, {
      duration: 2,
      width: "100%",
      ease: "power3.inOut"
    });
    /*Heart Animation*/
    timeline
      .to(heartRef.current, { duration: 5, y: "-=20", ease: "sine" })
      .to(heartRef.current, { duration: 5, y: "+=20", ease: "sine" });
  }, [timeline]);

  return (
    <div>
      <HomeNav/>
      <div className={style.heroContainer}>
        <div className={style.heroCenter}>
          <div ref={heartRef}>
            <Hearts className={style.hearts}/>
          </div>
          <h1>annex art drop</h1>
          <div className={style.locationContainer} onClick={(event) => {event.preventDefault(); window.open("https://www.google.com/maps/place/534+SW+Jackson+St,+Portland,+OR+97201/@45.5089016,-122.6833253,3a,75y,205.77h,71.77t/data=!3m6!1e1!3m4!1s-R9F--u_ipRkFKmxde0R1g!2e0!7i13312!8i6656!4m5!3m4!1s0x54950a143349daff:0x856d3639c1656c47!8m2!3d45.5087612!4d-122.683622")}}>
            <Location id={style.locationIcon}/>
            <h2>534 sw jackson st. portland, or 97201</h2>
          </div>
        </div>
        <div ref={backgroundRef} className={style.backgroundRef}></div>
        <Ticker/>
      </div>
    </div>
  );
}