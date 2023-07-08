import { Animation } from "./Animation";
import location from "./assets/pin.png";
import check from "./assets/check.png";
import gift from "./assets/gift.png";
import "./app.css"

function App() {
  return (
    <div className="container">
      <nav>
      <Animation/>
      <div className="title">
        <h1><span>Leonardo</span> & <span>Laiane</span></h1>
        <p>com amor, convidam para seu casamento</p>
      </div>
      <h2>
        <span>10</span>
        <span>|</span>
        <span>JANEIRO</span>
        <span>|</span>
        <span>2023</span>
        <span>|</span>
        <span>15H</span>
      </h2>
      <div className="icons">
        <span>
          <img src={location}/>
          <p>Localização</p>
        </span>
        <span>
          <img src={gift}/>
          <p>Presente</p>
        </span>
        <span>
          <img src={check}/>
          <p>Confirmação de presença</p>
        </span>
      </div>
    </nav>
  </div>
  );
}

export default App;
