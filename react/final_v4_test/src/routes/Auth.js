import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../config';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const pathname = window.location.search;
      const code = pathname.split('=')[1];
      const res = await axios.get(`${BASE_URL}/oauth/json?code=${code}`);
      console.log(res);
      navigate('/main');
    })();
  }, []);

  //코드를 백엔드로 보내서 토큰 받아와야 됨~~!!
  return <>로그인중~~!</>;
};

export default Auth;
