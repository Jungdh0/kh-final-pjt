import React from "react";
import { Link } from "react-router-dom";

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
            <Link to="#0" className="social_bt kakao">
              <div className="access_social">
                <img
                  className="kakao_logo col-2"
                  src="img/KakaoTalk_logo.png"
                />{" "}
                Start with Kakao
              </div>
            </Link>
            <div className="text-center add_top_10">
              New to PopCon?{" "}
              <strong>
                <Link to="/#0">Start with Kakao!</Link>
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
