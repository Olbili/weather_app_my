import { createContext, useEffect, useRef, useState } from "react";
import Container from "./Container/Container";
import Header from "./header/Header";
import Modal from './Modal/Modal';
import { request } from "./API/imagesRequest";
import News from "./news/News";
import { newsRequest } from "./API/newsRequest";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { imagesRequest } from './API/imagesRequest';
import SliderImages from './sliderImages/SliderImages';
import fetchData from './API/Weather';
import { CardsList } from './cards/cardsList/CardsList';
import HeroWrapper from './heroWrapper/HeroWrapper';
import Footer from "./footer/Footer";
import { Charted } from "./Chart/Charted";
import { FiveDays } from "./fiveDays/FiveDays";


export const contextInput = createContext(null);

const DEFAULT_IMAGE_URL = './img/default-placeholder.png';

export const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [weatherData, setWeatherData] = useState([]);
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [news, setNews] = useState([]);
  const [isChartedVisible, setIsChartedVisible] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [username, setUsername] = useState('Menu');
  const [fiveFetchData, setFiveFetchData] = useState([]);
  const [isFiveDaysVisible, setIsFiveDaysVisible] = useState(false);
 



  useEffect(() => {
    const storageData = localStorage.getItem('weatherCards');
    const parsedStorageData = JSON.parse(storageData);
    if (parsedStorageData) {
      setWeatherData(parsedStorageData);
      fetchNews("chicago", currentPage);
    }
    // if (parsedStorageData.length > 0) {
    //   fetchNews(parsedStorageData[0].name, currentPage);
    // }
  }, []);



  useEffect(() => {
    if (inputValue) {
      fetchData(inputValue)
        .then(data => {
          setWeatherData(prevData => {
            const newData = [data, ...prevData];
            localStorage.setItem('weatherCards', JSON.stringify(newData));
            return newData;
          });
        })
        .catch(error => toast('Incorrect city'));
    }
  }, [inputValue]);

  const delCard = cardName => {
    setWeatherData(prevData => prevData.filter(card => card.name !== cardName));
    localStorage.setItem(
      'weatherCards',
      JSON.stringify(weatherData.filter(card => card.name !== cardName))
    );
    setIsChartedVisible(false);
    setIsFiveDaysVisible(false);
  };

  const plusInputValue = value => {
    setInputValue(value);
  };

  const plusFiveFetchData = (value) => {
    setFiveFetchData(value);
  };

  const fetchNews = async page => {
    try {
      const fetchedNews = await newsRequest(inputValue, page);
      setNews(fetchedNews);
    } catch (error) {
      toast.error('Not found');
    }
  };

  const fetchedImages = async page => {
    try {
      const fetchedImages = await imagesRequest(inputValue, page);
      setImages(fetchedImages);
    } catch (error) {
      toast.error('Not found');
    }
  };

  useEffect(() => {
    if (inputValue) {
      fetchNews(currentPage);
    }
  }, [currentPage, inputValue]);

  useEffect(() => {
    fetchedImages(1);
  }, [inputValue]);

  const handleSeeMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handleLogout = e => {
    e.preventDefault();

    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    setUsername('Menu');
    signUp(); 
  };

  const signUp = () => {
    setIsUserLoggedIn(prev => !prev); 
  };

  useEffect(() => {
    if (localStorage.getItem('name')) {
      setIsUserLoggedIn(true); 
      setUsername(localStorage.getItem('name')); 
    }
  }, []);

  return (
    <>
    <Container>
      {/* <div>{ <button onClick={notify}>Notify!</button> }</div> */}
      { <Header  setModalIsOpen={setModalIsOpen} username={username} onLogout={handleLogout} isUserLoggedIn={isUserLoggedIn} signUp={signUp}/> }
     
      </Container>

      { <Modal
        modalIsOpen={modalIsOpen}
        setUsername={setUsername}
        handleLogout={handleLogout}
        signUp={signUp}
        onClose={() => setModalIsOpen(false)}
      /> }
      <contextInput.Provider value={{ plusInputValue }}>
        <HeroWrapper />
      </contextInput.Provider>

        <Container>
        {weatherData.length === 0 ? null : 
    <CardsList data={weatherData}  delCard={delCard} setIsChartedVisible={setIsChartedVisible} isChartedVisible={isChartedVisible}  plusFiveFetchData={plusFiveFetchData} isFiveDaysVisible={isFiveDaysVisible} setIsFiveDaysVisible={setIsFiveDaysVisible}/ >
      }
    {/* <FiveDays fiveFetchData={fiveFetchData}/> */}
    {isChartedVisible === true && ( <Charted />)}
     {isFiveDaysVisible === true && (<FiveDays fiveFetchData={fiveFetchData}/>)}
      <News news={news} handleSeeMore={handleSeeMore} defaultImg={DEFAULT_IMAGE_URL}/>
      <SliderImages images={images}/>
      
      <ToastContainer />
   
        </Container>
      
    <Footer />
    </>
  );
};
