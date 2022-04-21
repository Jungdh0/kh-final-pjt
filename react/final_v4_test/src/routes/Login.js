import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import { layoutState } from '../state';
import { useRecoilState } from 'recoil';

const Login = () => {
  const [layoutVisible, setLayoutVisible] = useRecoilState(layoutState);

  setLayoutVisible(false);

  const API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = 'http://localhost:3000/auth';
  const authorize = `https://kauth.kakao.com/oauth/authorize?client_id=${API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  useEffect(() => {
    return () => {
      setLayoutVisible(true);
    };
  }, []);

  return (
    <div>
      <div className="container px-4">
        <div id="login" className="mx-auto my-5 px-4">
          <figure>
            <Link to="/coverPage" className="logo_account">
              <img src="img/logo/big_pop.png" alt="" className="dark" />
            </Link>
            <img src="img/logo/full.png" alt="" style={{ width: '25%' }} />
          </figure>

          <form className=" mx-auto mx-5">
            <div className="access_social ">
              <a className="social_bt kakao" href={authorize}>
                <img className="kakao_logo col-2" src="img/KakaoTalk_logo.png" style={{ height: '20px', width: '20px' }} /> 카카오로 시작하기
              </a>
            </div>
            <div className="text-center add_top_10">
              팝콘은 처음이신가요?{' '}
              <strong>
                <Link to="/#0">카카오로 시작해보세요!</Link>
              </strong>
            </div>
          </form>
          <div className="copy">© 2022 PopCon</div>
        </div>
      </div>
      {/*/login */}

      {/*COMMON SCRIPTS */}
      <script src="js/common_scripts.min.js"></script>
      <script src="js/bootstrap.bundle.min.js"></script>
      <script src="js/common_func.js"></script>
    </div>
  );
};

export default Login;
