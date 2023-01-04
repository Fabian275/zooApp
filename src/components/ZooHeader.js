import zooh from "./../resources/zooh.jpg";
import EventsToday from "./EventsToday";

function ZooHeader() {
  return (
    <div className="green">
      <div className="ZooAppheader">
        <button>❮ zurück</button>
        <p></p>
        <p></p>
        <img id="zoohImg" src={zooh} alt="zoohBild"></img>
      </div>
      <EventsToday />
    </div>
  );
}

export default ZooHeader;
