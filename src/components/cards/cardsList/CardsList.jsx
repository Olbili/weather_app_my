import s from './CardsList.module.css'
import React from 'react'
import CardsItem from '../cardsItem/CardsItem';
import { v4 as uuidv4 } from 'uuid';
uuidv4(); 
export const CardsList = ({ data, delCard, isChartedVisible, setIsChartedVisible, plusFiveFetchData, isFiveDaysVisible, setIsFiveDaysVisible }) => {
  return (
    <ul className={s.clist}>
      {data.map (({main, wind:{speed}, name, sys:{country}, visibility, weather}) => {
        return (
        <CardsItem key={uuidv4()} name={name} main={main} speed={speed} country={country} visibility={visibility} weather={weather} delCard={delCard} isChartedVisible={isChartedVisible} setIsChartedVisible={setIsChartedVisible} plusFiveFetchData={plusFiveFetchData} isFiveDaysVisible={isFiveDaysVisible} setIsFiveDaysVisible={setIsFiveDaysVisible}/>
         )
      })}
    </ul>
  );
};