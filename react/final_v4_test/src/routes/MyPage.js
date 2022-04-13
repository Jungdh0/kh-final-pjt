import React from "react";
import { Link } from "react-router-dom";

const MyPage = () => {
  return (
    <div>
      <main>
        <div className="container margin_30_40" id="wrapper">
          <div className="row">
            <div className="col-lg-12 ps-lg-5">
              <div className="main_title version_2">
                <span>
                  <em></em>
                </span>
                <h2>마이 페이지</h2>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="main_profile edit_section">
                <div className="author">
                  <div className="author_thumb veryfied">
                    <i className="bi bi-check"></i>
                    <figure>
                      <img
                        src="img/profile.svg"
                        alt=""
                        className="lazy"
                        width="100"
                        height="100"
                      />
                    </figure>
                  </div>
                </div>
                <h1>user_id</h1>
                <ul>
                  <li>
                    <Link to="/myPage">
                      <i className="bi bi-gear"></i>이메일 : <span>user_id@popcon.com</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/login">
                      <i className="bi bi-box-arrow-right"></i>로그아웃
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 ps-lg-6">
              <div className="main_profile edit_section">
                <div className="row" id="ott_logos">
                  <div className="col-lg-4 ps-lg-12 author" id="ott_hover">
                    <div className="author_thumb veryfied">
                      <figure className="ott_logo">
                        <img
                          src="img/netflix_logo.jpeg"
                          alt=""
                          className="lazy"
                          width="100"
                          height="100"
                        />
                      </figure>
                      <p className="ott_name" id="ott_name">Netflix</p>
                    </div>
                  </div>
                  <div className="col-lg-4 ps-lg-12 author" id="ott_hover">
                    <div className="author_thumb veryfied">
                      <figure>
                        <img
                          src="img/tving_logo.jpeg"
                          alt=""
                          className="lazy"
                          width="100"
                          height="100"
                        />
                      </figure>
                      <p className="ott_name" id="ott_name">Tving</p>
                    </div>
                  </div>
                  <div className="col-lg-4 ps-lg-12 author" id="ott_hover">
                    <div className="author_thumb veryfied">
                      <figure>
                        <img
                          src="img/wavve_logo.png"
                          alt=""
                          className="lazy"
                          width="100"
                          height="100"
                        />
                      </figure>
                      <p className="ott_name" id="ott_name">Wavve</p>
                    </div>
                  </div>
                  {/*<p className="text-end mt-4" style={{marginBottom:26}}>*/}
                  {/*  <Link to="/editProfile" className="btn_1">*/}
                  {/*    Edit Profile*/}
                  {/*  </Link>*/}
                  {/*</p>*/}
                </div>
              </div>
              {/*/row*/}
            </div>
          </div>
          <hr className="mt-4 mb-5"></hr>
          <p className="text-end">
            <Link to="/editProfile" className="btn_1">
              OTT 수정하기
            </Link>
          </p>
          {/*/row*/}
        </div>
        {/*/container*/}
      </main>
      {/*/main*/}

      {/*COMMON SCRIPTS*/}
      <script src="js/common_scripts.min.js"></script>
      <script src="js/bootstrap.bundle.min.js"></script>
      <script src="js/common_func.js"></script>
    </div>
  );
};

export default MyPage;
