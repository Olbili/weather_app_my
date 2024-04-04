import React from 'react';
import s from './newsItem.module.css';
import background from '../../../img/default-placeholder.png';

const NewsItem = ({ description, urlToImage, defaultImg }) => {
  return (
    <>
      {description === '[Removed]' ? (
        <li className={s.newsItem}>
          <img src={background} alt="Default Image" className={s.newsImg} />

          <p className={s.description}>The new is deleted</p>
        </li>
      ) : (
        <li className={s.newsItem}>
          {urlToImage ? (
            <img src={urlToImage} alt="pets" className={s.newsImg} />
          ) : (
            <img src={background} alt="Default Image" className={s.newsImg} />
          )}
          <p className={s.description}>{description}</p>
        </li>
      )}
    </>
  );
};

export default NewsItem;
