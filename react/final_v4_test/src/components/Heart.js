import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../config';
import axios from 'axios';
import './Heart.css';

const Heart = ({ isLiked, contentCode }) => {
  const [isPurple, setIsPurple] = useState(isLiked);

  const toggleLike = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/movies/${contentCode}/like`);
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
      <i className={isPurple ? 'heartPurple' + ' ' + 'bi bi-heart-fill' : 'heartWhite' + ' ' + 'bi bi-heart-fill'}> </i>
    </Link>
  );
};

export default Heart;
