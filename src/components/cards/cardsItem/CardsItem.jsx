import { WiDaySunny } from "react-icons/wi";
import { IoReload } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FcLike } from "react-icons/fc";
import { RiDeleteBin5Line } from "react-icons/ri";
import bar from "../../../img/bar.svg";
import eye from "../../../img/eye.svg";
import rain from "../../../img/rain.svg";
import temp from "../../../img/temp.svg";
import speeds from "../../../img/speed.svg";

import clouds from "img/clouds.svg";
import clear from "img/sun.svg";
import snow from "img/snowy.png";


import React, { useState } from 'react';
import s from './CardsItem.module.scss'
import fetchData, { fiveFetchData } from "components/API/Weather";


export const CardsItem = ({ id, name, main, speed, country, visibility, delCard, isLiked=false, isChartedVisible, setIsChartedVisible, plusFiveFetchData, weather, isFiveDaysVisible, setIsFiveDaysVisible }) => { 
const [likedState, setlikedState] = useState(isLiked)
const [weatherDetails, setWeatherDetails] = useState(false)

const like = () => {
  setlikedState(!likedState)
}

const weatherData = async (name) => {
  try {
    const data = await fiveFetchData(name)
    plusFiveFetchData(data.list)
  } catch (error) {
    throw new Error("error") 
  }
  
}

const statusIcon = (status) => {
  if ("clouds" === status) {
    return <img className={s.icon}src={clouds} alt="clouds" />;
  } else if ("clear" === status) {
    return <img className={s.icon}src={clear} alt="clear" />;
  } else if ("rain" === status) {
    return <img className={s.icon}src={rain} alt="rain" />;
  } else if ("snow" === status) {
    return <img className={s.icon}src={snow} alt="snow" />;
  }
} ;

const toggleDetails = () => {
  setWeatherDetails(!weatherDetails)
}

const celsius = Math.round(main.temp - 273.15);
const celsiusMin = Math.round(main.temp_min - 273.15);
const celsiusMax = Math.round(main.temp_max - 273.15);
const celsiusLike = Math.round(main.feels_like - 273.15);
  return (
    <>
     <div className={s.section}>
      <li id={id} className={s.card}>
        <div className={s.cardHeader}>
          <p className={s.text}>{name}</p>
          <p className={s.text}>{country}</p>
        </div>
        <div className={s.forecastButton}>
          <button className={s.forecastButtonHourly} onClick={(e) => {
          e.preventDefault()
          setIsChartedVisible(!isChartedVisible)}}>Hourly forecast</button>
          {/* <button className={s.forecastButtonWeekly} onClick={(e) => {e.preventDefault()
          setIsFiveDaysVisible(!isFiveDaysVisible)}}>Weekly forecast</button> */}
        <button className={s.forecastButtonWeekly} onClick={(e) => {
          e.preventDefault()
          setIsFiveDaysVisible(!isFiveDaysVisible)
          weatherData(name)}}>Weekly forecast</button>
        </div>
        <div className={s.now}>
          <p className={s.date}>{new Date().toLocaleDateString()}</p>
          <p className={s.day}>{new Date().toLocaleDateString('en-US', { weekday: 'long' })}</p>
        </div>
        <div className={s.cardBody}>
          <div>{statusIcon(weather[0].main.toLowerCase())}</div>
          <p className={s.temperature}>{main ? `${celsius} °C` : 'N/A'}</p>
        </div>
        <div className={s.cardActions}>
          <button className={s.reload} onClick={() => (fetchData())}><IoReload/></button>
          <button className={s.like} onClick={like}>
            {likedState ? <FcLike /> : <CiHeart />}
          </button>
          <button className={s.seeMore} onClick={toggleDetails}>See more</button>
          <button className={s.del} onClick={() => (delCard(name))}><RiDeleteBin5Line /></button>
        </div>
      </li>
      <div>
        {weatherDetails && (
          <ul className={s.details}>
            <li>Feels like <br/>
            {main ? `${celsiusLike} °C` : 'N/A'}<br/>
            <img src={temp} alt="" />
            </li>
            <li className={s.min_max}><p>Min °C {main ? `${celsiusMin} °C ` : 'N/A'}</p><br/>
            <p>Max °C {main ? `${celsiusMax} °C ` : 'N/A'}</p></li>
            <li>Humidity <br/>
            {main.humidity}%<br/>
            <img src={rain} alt="" />
            </li>
            <li>Pressure <br/>
            {main.pressure} Pa<br/>
            <img src={bar} alt="" />
            </li>
            <li>Wind speed <br/>
            {speed} m/s<br/>
            <img src={speeds} alt="" />
            </li>
            <li>Visibility <br/>
            {visibility}<br/>
            <img src={eye} alt="" />
            </li>
          </ul>
        )}
        </div>
        </div>
    </>
  );
};

export default CardsItem;