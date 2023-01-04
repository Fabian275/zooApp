import elefant from "./../resources/elefant.webp";
import lama from "./../resources/lama.jpg";
import fledermaus from "./../resources/fledermaus.webp";
import Calender from "./Calender";

function EventsToday() {
  return (
    <div id="whitepage">
      <h1>Zoo Events</h1>
      <div
        className="grayBox"
        style={{ borderRadius: "17px", marginBottom: "40px" }}
      >
        <h2>Events heute:</h2>
      </div>
      <div id="top3today">
        <div>
          <div className="grayBox">
            <p>Elefant tricks</p>
          </div>
          <img className="EventsTodayBilder" src={elefant} alt="elefant"></img>
        </div>
        <div>
          <div className="grayBox">
            <p>Kinder spass</p>
          </div>
          <img className="EventsTodayBilder" src={lama} alt="lama"></img>
        </div>
        <div>
          <div className="grayBox">
            <p>night show</p>
          </div>
          <img
            className="EventsTodayBilder"
            src={fledermaus}
            alt="fledermaus"
          ></img>
        </div>
      </div>
      <Calender />
    </div>
  );
}

export default EventsToday;
