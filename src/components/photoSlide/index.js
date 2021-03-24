import React, { useEffect, useRef, useState } from "react";
import style from "./index.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function PhotoSlide(props) {
  let firstRef = useRef(null);
  let secondRef = useRef(null);
  let thirdRef = useRef(null);
  let titleRef = useRef(null);
  var timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".trigger",
      start: "center bottom",
      end: "center top",
      scrub: true
    }
  });
  const [windowSize, setWindowSize] = useState(null);

  useEffect(() => {
    timeline.to(firstRef.current, { yPercent: -50, duration: 1 });
    timeline.to(secondRef.current, { yPercent: -40, duration: 1 });
    timeline.to(thirdRef.current, { yPercent: -50, duration: 1 });
    setWindowSize(windowSize);
    console.log(windowSize);
  }, [timeline, windowSize]);

  return (
    <div className={style.photoSlide}>
      <div className={style.textCrop}>
        <h1 ref={titleRef}>annexartdrop</h1>
        <div className={style.imageContainer}>
          <div className={style.imageCard} ref={firstRef}>
            <div className={style.imageCrop}>
              <img
                alt=""
                src={props.image1}
              />
            </div>
          </div>
          <div className={style.imageCard} ref={secondRef}>
            <div className={style.imageCrop}>
              <img
                alt=""
                src={props.image1}
              />
            </div>
          </div>
          <div className={style.imageCard} ref={thirdRef}>
            <div className={style.imageCrop}>
              <img
                alt=""
                src={props.image1}
              />
            </div>
          </div>
        </div>
      </div>
      <section></section>
    </div>
  );
}
