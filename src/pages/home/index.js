import style from "./index.module.scss"
import Ticker from "../../components/ticker";
import { ReactComponent as Hearts } from "../../images/peepoo.svg";
import {ReactComponent as Location} from "../../images/location.svg";

export default function Home() {
  return (
    <div className={style.heroContainer}>
      <div className={style.heroCenter}>
        <Hearts className={style.hearts}/>
        <h1>annex art drop</h1>
        <Location id={style.test}/>
        <h2>534 sw jackson st. portland, or 97201</h2>
      </div>
      <Ticker/>
    </div>
  );
}