import Data from "./../json/wochentage.json";
import ZooFooter from "./ZooFooter";

function Calender() {
  return (
    <>
      <div id="calender">
        <h2>Wähle ein Datum aus:</h2>
        <div id="wochentage">
          <p>M</p>
          <p>D</p>
          <p>M</p>
          <p>D</p>
          <p>F</p>
          <p>S</p>
          <p>S</p>
        </div>
        <hr />
        <div className="row">
          {Object.values(Data.data[2023].Januar.w1).map((a) => (
            <p className="item">{a}</p>
          ))}
        </div>
        <div className="row">
          {Object.values(Data.data[2023].Januar.w2).map((a) => (
            <p className="item">{a}</p>
          ))}
        </div>
        <div className="row">
          {Object.values(Data.data[2023].Januar.w3).map((a) => (
            <p className="item">{a}</p>
          ))}
        </div>
        <div className="row">
          {Object.values(Data.data[2023].Januar.w4).map((a) => (
            <p className="item">{a}</p>
          ))}
        </div>
        <div className="row">
          {Object.values(Data.data[2023].Januar.w5).map((a) => (
            <p className="item">{a}</p>
          ))}
        </div>
        <div className="row">
          {Object.values(Data.data[2023].Januar.w6).map((a) => (
            <p className="item">{a}</p>
          ))}
        </div>
      </div>
      <ZooFooter />
    </>
  );
}

export default Calender;
