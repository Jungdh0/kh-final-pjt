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
      //url의 인가코드
      try {
        const res = await axios.get(`${BASE_URL}/oauth/token?code=${code}`);
        //인가코드를 백엔드로 보내고 헤더에서 엑세스 토큰 받아옴
        const token = res.headers.authorization;
        window.localStorage.setItem('token', token);
        //로컬스토리지에 저장
        navigate('/main');
      } catch (e) {
        console.error(e);
        navigate('/main');
      }
    })();
  }, []);

  //코드를 백엔드로 보내서 토큰 받아와야 됨~~!!
  return (
    <div class="kart-loader">
      <div class="sheath">
        <div class="segment"></div>
      </div>
      <div class="sheath">
        <div class="segment"></div>
      </div>
      <div class="sheath">
        <div class="segment"></div>
      </div>
      <div class="sheath">
        <div class="segment"></div>
      </div>
      <div class="sheath">
        <div class="segment"></div>
      </div>
      <div class="sheath">
        <div class="segment"></div>
      </div>
      <div class="sheath">
        <div class="segment"></div>
      </div>
      <div class="sheath">
        <div class="segment"></div>
      </div>
      <div class="sheath">
        <div class="segment"></div>
      </div>
      <div class="sheath">
        <div class="segment"></div>
      </div>
      <div class="sheath">
        <div class="segment"></div>
      </div>
      <div class="sheath">
        <div class="segment"></div>
      </div>
    </div>
  );
};

export default Auth;
