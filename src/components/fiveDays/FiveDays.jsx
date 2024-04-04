import React from 'react'
import s from "./FivaDays.module.css";
import clouds from "img/clouds.svg";
import clear from "img/sun.svg";
import rain from "img/rain.svg";
import snow from "img/snowy.png";


export const FiveDays = ({ fiveFetchData }) => {
  // Filter data to display every day (index % 1 === 0)
  const filteredData = fiveFetchData.filter((_, index) => index % 8 === 0);

  
  const formatDate = (dt) => {
    const date = new Date(dt * 1000);
    return date.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
  };

  const statusIcon = (status) => {
    if ("clouds" === status) {
      return <img src={clouds} alt="clouds" />;
    } else if ("clear" === status) {
      return <img src={clear} alt="clear" />;
    } else if ("rain" === status) {
      return <img src={rain} alt="rain" />;
    } else if ("snow" === status) {
      return <img src={snow} alt="snow" />;
    }
  } ;
  


  return (
    <ul className={s.u}>
    {/* <p className={s.p}>Weekly forecast</p> */}
    {filteredData.map((item, index) => (
       <li className={s.li} key={index}>
       <div className={s.date}>{formatDate(item.dt)}</div>
       <div className={s.dop}>
            <div>{statusIcon(item.weather[0].main.toLowerCase())}</div>
            <div className={s.temp}>{Math.round(item.main.temp - 273.15)}°C</div>
          </div>
          <div className={s.status}>{item.weather[0].main.toLowerCase()}</div>
          </li>
      ))}
    </ul>
  );
};
