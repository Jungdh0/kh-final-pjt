import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../config';
import axios from 'axios';
import './Heart.css';

const Heart = ({ isLiked, contentCode }) => {
  const [isPurple, setIsPurple] = useState(isLiked);
  const token = window.localStorage.getItem('token');

  const toggleLike = async () => {
    try {
      const res = await axios.put(
        `${BASE_URL}/movies/${contentCode}/like`,
        {},
        {
          headers: {
            Authorization: token,
          },
        }
      );
      res.data ? setIsPurple(true) : setIsPurple(false);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Link
      to="#0"
      className="wish_bt"
      onClick={(e) => {
        e.preventDefault();
        toggleLike(contentCode);
      }}
    >
      <i className={isPurple ? 'heartPurple' + ' ' + 'bi bi-heart-fill' : 'heartWhite' + ' ' + 'bi bi-heart-fill'} style={{ fontSize: '20px' }}>
        {' '}
      </i>
    </Link>
  );
};

export default Heart;
