import React from 'react';
import NewsItem from './newsItem/NewsItem';
import s from './news.module.css';
import { v4 as uuidv4 } from 'uuid';

const News = ({ news, handleSeeMore }) => {
  return (
    <>
      <p className={s.newsTitle}>Interacting with our news</p>
      <ul className={s.newsList}>
        {/* <p>Interacting with our pets</p> */}
        {news.map(({ id, description, urlToImage }) => (
          <NewsItem
            key={uuidv4()}
            urlToImage={urlToImage}
            description={description}
          />
        ))}
      </ul>

      <button onClick={handleSeeMore} className={s.buttonPagination}>
        See more
      </button>
    </>
  );
};

export default News;
