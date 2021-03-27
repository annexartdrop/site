import style from "./index.module.scss";
import React, {useState} from "react";

const Notification = (props) => {
  const [intervalID, setIntervalID] = useState(null);

  return (
    <React.Fragment>
      <h1 className={style.notification}>Notification</h1>
    </React.Fragment>
  );
}

export default Notification;