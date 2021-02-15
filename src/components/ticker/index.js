import style from "./index.module.scss"
import store from "../../database";


export default function App() {
  return (
    <div className={style.tickerParent}>
      <marquee loop="infite" scrollamount="2">
        <h2>Black Lives Matter</h2>
        <h2>Say Their Names</h2>
        {store.blm.map((names, i) => (
          <h2 key={i} className={style.names}>{names}</h2>
        ))}
      </marquee>
    </div>
  );
}