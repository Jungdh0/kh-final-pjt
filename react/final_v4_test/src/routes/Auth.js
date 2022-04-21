import React from 'react';

const Auth = () => {
  const pathname = window.location.search;
  const code = pathname.split('=')[1];
  console.log(code);

  //코드를 백엔드로 보내서 토큰 받아와야 됨~~!!
  return <>로그인중~~!</>;
};

export default Auth;
