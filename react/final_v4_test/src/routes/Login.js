import React from "react";
import {Link, Redirect} from "react-router-dom";

const Login = () => {
  return (
      <div id="wrapper">
        <div id="login_bg" className="dark-theme">
          <div id="login">
            <aside className="">
              <figure>
                <Link to="/coverPage" className="logo_account">
                  <img
                      src="img/popcon_logo_test.png"
                      alt=""
                      width="181.35"
                      height="35"
                      className="dark"
                  />
                </Link>
              </figure>

              <form>
                {/*<Redirect to="https://kauth.kakao.com/oauth/authorize?client_id=00ce48db774c8e8effcc16b9758ad126&redirect_uri=http://localhost:8080/auth/kakao/callback&response_type=code" className="social_bt kakao">*/}
                <Link to="/" className="social_bt kakao">
                  <div className="access_social">
                    <img
                        className="kakao_logo col-2"
                        src="img/KakaoTalk_logo.png"
                    alt=""/>{" "}
                    카카오로 시작하기
                  </div>
                </Link>
                {/*</Redirect>*/}
                <div className="text-center add_top_10">
                  팝콘은 처음이신가요?{" "}
                  <strong>
                    <Link to="/#0">카카오로 시작해보세요!</Link>
                  </strong>
                </div>
              </form>
              <div className="copy">© 2022 PopCon</div>
            </aside>
          </div>
          {/*/login */}

          {/*COMMON SCRIPTS */}
          <script src="js/common_scripts.min.js"></script>
          <script src="js/bootstrap.bundle.min.js"></script>
          <script src="js/common_func.js"></script>
        </div>
      </div>
  );
};

export default Login;
