import React, { Fragment } from "react";
import style from "./index.module.scss"
import Footer from "../../components/footer";

export default function About() {
  return (
    <React.Fragment>
      <div className="aboutContainer">
        <h1>About</h1>
      </div>
      <Footer/>
    </React.Fragment>

  );
}