import { useEffect, useState } from "react";
import Data from "../json/wochentage.json";
import ZooFooter from "./ZooFooter";
// import Calendar from "react-calendar";

function Calender() {
  const today = new Date();
  today.getDate;

  // console.log(Data.Januar["Woche 1"].Montag);

  const monateListe = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ];
  const [monthNumber, setMonthNumber] = useState(today.getMonth());
  const [monthName, setMonthName] = useState(monateListe[today.getMonth()]);

  const monthHoch = () => {
    if (monthNumber < 11) {
      setMonthNumber(monthNumber + 1);
    } else {
      setMonthNumber(0);
    }
  };

  const monthRunter = () => {
    if (monthNumber > 0) {
      setMonthNumber(monthNumber - 1);
    } else {
      setMonthNumber(11);
    }
  };

  useEffect(() => {
    setMonthName(monateListe[monthNumber]);
  }, [monthNumber]);
  console.log(monthNumber);
  console.log(monthName);

  return (
    <>
      <div id="calender">
        <h2>Wähle ein Datum aus:</h2>
        <div id="month">
          <button onClick={monthRunter} className="buttonMonths">
            {"❮"}
          </button>
          <p>{monthName}</p>
          <button onClick={monthHoch} className="buttonMonths">
            {"❯"}
          </button>
        </div>
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
          <p className="item">{Data[monthName]["Woche 1"].Montag}</p>
          <p className="item">{Data[monthName]["Woche 1"].Dienstag}</p>
          <p className="item">{Data[monthName]["Woche 1"].Mittwoch}</p>
          <p className="item">{Data[monthName]["Woche 1"].Donnerstag}</p>
          <p className="item">{Data[monthName]["Woche 1"].Freitag}</p>
          <p className="item">{Data[monthName]["Woche 1"].Samstag}</p>
          <p className="item">{Data[monthName]["Woche 1"].Sonntag}</p>
        </div>
        <div className="row">
          <p className="item">{Data[monthName]["Woche 2"].Montag}</p>
          <p className="item">{Data[monthName]["Woche 2"].Dienstag}</p>
          <p className="item">{Data[monthName]["Woche 2"].Mittwoch}</p>
          <p className="item">{Data[monthName]["Woche 2"].Donnerstag}</p>
          <p className="item">{Data[monthName]["Woche 2"].Freitag}</p>
          <p className="item">{Data[monthName]["Woche 2"].Samstag}</p>
          <p className="item">{Data[monthName]["Woche 2"].Sonntag}</p>
        </div>
        <div className="row">
          <p className="item">{Data[monthName]["Woche 3"].Montag}</p>
          <p className="item">{Data[monthName]["Woche 3"].Dienstag}</p>
          <p className="item">{Data[monthName]["Woche 3"].Mittwoch}</p>
          <p className="item">{Data[monthName]["Woche 3"].Donnerstag}</p>
          <p className="item">{Data[monthName]["Woche 3"].Freitag}</p>
          <p className="item">{Data[monthName]["Woche 3"].Samstag}</p>
          <p className="item">{Data[monthName]["Woche 3"].Sonntag}</p>
        </div>
        <div className="row">
          <p className="item">{Data[monthName]["Woche 4"].Montag}</p>
          <p className="item">{Data[monthName]["Woche 4"].Dienstag}</p>
          <p className="item">{Data[monthName]["Woche 4"].Mittwoch}</p>
          <p className="item">{Data[monthName]["Woche 4"].Donnerstag}</p>
          <p className="item">{Data[monthName]["Woche 4"].Freitag}</p>
          <p className="item">{Data[monthName]["Woche 4"].Samstag}</p>
          <p className="item">{Data[monthName]["Woche 4"].Sonntag}</p>
        </div>
        <div className="row">
          <p className="item">{Data[monthName]["Woche 5"].Montag}</p>
          <p className="item">{Data[monthName]["Woche 5"].Dienstag}</p>
          <p className="item">{Data[monthName]["Woche 5"].Mittwoch}</p>
          <p className="item">{Data[monthName]["Woche 5"].Donnerstag}</p>
          <p className="item">{Data[monthName]["Woche 5"].Freitag}</p>
          <p className="item">{Data[monthName]["Woche 5"].Samstag}</p>
          <p className="item">{Data[monthName]["Woche 5"].Sonntag}</p>
        </div>
        <div className="row">
          <p className="item">{Data[monthName]["Woche 6"]?.Montag}</p>
          <p className="item">{Data[monthName]["Woche 6"]?.Dienstag}</p>
          <p className="item">{Data[monthName]["Woche 6"]?.Mittwoch}</p>
          <p className="item">{Data[monthName]["Woche 6"]?.Donnerstag}</p>
          <p className="item">{Data[monthName]["Woche 6"]?.Freitag}</p>
          <p className="item">{Data[monthName]["Woche 6"]?.Samstag}</p>
          <p className="item">{Data[monthName]["Woche 6"]?.Sonntag}</p>
        </div>
      </div>
      <ZooFooter />
    </>
  );
}

export default Calender;
