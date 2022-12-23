// import axios from 'axios'
import { useState } from "react";
// import { v4 as myNewID } from "uuid";
// const URL="http://localhost:8000/api/users/me";
//import swStadiums from "../../data/stadiums.json"
//array[]
//object{}
const arendaData = [
  {
    id: 1,
    date: "Monday",
    rents: [
      {id:0,time:"12:00-13:00"},
      {id:1,time:"13:00-14:00"},
      {id:2,time:"14:00-15:00"},
      {id:3,time:"15:00-16:00"},
      {id:4,time:"16:00-17:00"},
      {id:5,time:"17:00-18:00"},
      {id:6,time:"18:00-19:00"},
      {id:7,time:"19:00-20:00"},
      {id:8,time:"20:00-21:00"},
      {id:9,time:"21:00-22:00"},
      {id:10,time:"22:00-23:00"},
      {id:11,time:"23:00-00:00"},

    ],
  },
  {
    id: 2,
    date: "Tuesday",
    rents: [
      {id:0,time:"12:00-13:00"},
      {id:1,time:"13:00-14:00"},
      {id:2,time:"14:00-15:00"},
      {id:3,time:"15:00-16:00"},
      {id:4,time:"16:00-17:00"},
      {id:5,time:"17:00-18:00"},
      {id:6,time:"18:00-19:00"},
      {id:7,time:"19:00-20:00"},
      {id:8,time:"20:00-21:00"},
      {id:9,time:"21:00-22:00"},
      {id:10,time:"22:00-23:00"},
      {id:11,time:"23:00-00:00"},

    ],
  },
  {
    id: 3,
    date: "Wednesday",
    rents: [
      {id:0,time:"12:00-13:00"},
      {id:1,time:"13:00-14:00"},
      {id:2,time:"14:00-15:00"},
      {id:3,time:"15:00-16:00"},
      {id:4,time:"16:00-17:00"},
      {id:5,time:"17:00-18:00"},
      {id:6,time:"18:00-19:00"},
      {id:7,time:"19:00-20:00"},
      {id:8,time:"20:00-21:00"},
      {id:9,time:"21:00-22:00"},
      {id:10,time:"22:00-23:00"},
      {id:11,time:"23:00-00:00"},

    ],
  },
  {
    id: 4,
    date: "Thursday",
    rents: [
      {id:0,time:"12:00-13:00"},
      {id:1,time:"13:00-14:00"},
      {id:2,time:"14:00-15:00"},
      {id:3,time:"15:00-16:00"},
      {id:4,time:"16:00-17:00"},
      {id:5,time:"17:00-18:00"},
      {id:6,time:"18:00-19:00"},
      {id:7,time:"19:00-20:00"},
      {id:8,time:"20:00-21:00"},
      {id:9,time:"21:00-22:00"},
      {id:10,time:"22:00-23:00"},
      {id:11,time:"23:00-00:00"},

    ],
  },
  {
    id: 5,
    date: "Friday",
    rents: [
      {id:0,time:"12:00-13:00"},
      {id:1,time:"13:00-14:00"},
      {id:2,time:"14:00-15:00"},
      {id:3,time:"15:00-16:00"},
      {id:4,time:"16:00-17:00"},
      {id:5,time:"17:00-18:00"},
      {id:6,time:"18:00-19:00"},
      {id:7,time:"19:00-20:00"},
      {id:8,time:"20:00-21:00"},
      {id:9,time:"21:00-22:00"},
      {id:10,time:"22:00-23:00"},
      {id:11,time:"23:00-00:00"},

    ],
  },
  {
    id: 6,
    date: "Saturday",
    rents: [
      {id:0,time:"12:00-13:00"},
      {id:1,time:"13:00-14:00"},
      {id:2,time:"14:00-15:00"},
      {id:3,time:"15:00-16:00"},
      {id:4,time:"16:00-17:00"},
      {id:5,time:"17:00-18:00"},
      {id:6,time:"18:00-19:00"},
      {id:7,time:"19:00-20:00"},
      {id:8,time:"20:00-21:00"},
      {id:9,time:"21:00-22:00"},
      {id:10,time:"22:00-23:00"},
      {id:11,time:"23:00-00:00"},

    ],
  },
  {
    id: 7,
    date: "Sunday",
    rents: [
      {id:0,time:"12:00-13:00"},
      {id:1,time:"13:00-14:00"},
      {id:2,time:"14:00-15:00"},
      {id:3,time:"15:00-16:00"},
      {id:4,time:"16:00-17:00"},
      {id:5,time:"17:00-18:00"},
      {id:6,time:"18:00-19:00"},
      {id:7,time:"19:00-20:00"},
      {id:8,time:"20:00-21:00"},
      {id:9,time:"21:00-22:00"},
      {id:10,time:"22:00-23:00"},
      {id:11,time:"23:00-00:00"},

    ],
  },
];

export const Calendar = () => {
  const [arenda, setArenda] = useState(arendaData);

  const handleArendaChange = (day, rent) => {
    if (
      window.confirm(`day: ${day.date}  
                hour: ${rent.time}`) === true
    ) {
      setArenda((prevElement) =>
        prevElement.map((dayElem) => {
          if (dayElem.id === day.id) {
            return {
              ...dayElem,
              rents: dayElem.rents.map((rentElem) => {
                if (rentElem.id === rent.id) {
                  return { ...rentElem, isColored: !rentElem.isColored };
                } else return rentElem;
              }),
            };
          } else return dayElem;
        })
      );
    } else {
      console.log("nothing");
    }
  };
  
  console.log(arenda);
  const stringified=JSON.stringify(arenda)
  window.localStorage.setItem('rented',stringified)
  
  return (
    <div style={{ display: "flex" }}>
      {arenda.map((day, dayIndex) => (
        <div key={dayIndex}>
          {day.rents.map((rent, rentIdx) => (
            <div
              key={rentIdx}
              onClick={() => handleArendaChange(day, rent)}
              style={{
                border: "1px solid black",
                padding: "6px 12px",
                width: "200px",
                height: "50px",
                
                backgroundColor: rent.isColored ? "red" : "white",
              }}
            >
              {day.date} <br/> {rent.time}
            
              
              
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};