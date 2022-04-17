import React from "react";
import movies from "../sampledata/샘플.json";
import { Link } from "react-router-dom";

const LikePage = () => {
  return (
    <div>
      <main>
        <div
          className="container margin_30_40"
          id="wrapper"
          style={{ paddingTop: 60 }}
        >
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="main_profile edit_section">
                <div className="author">
                  <div className="author_thumb veryfied">
                    <figure>
                      <img
                        src="https://velog.velcdn.com/images/joyoo1221/post/b268dd99-ddf0-40b8-8d94-17abf8ca2933/image.png"
                        alt=""
                        className="lazy"
                        width="105"
                        height="105"
                      />
                    </figure>
                  </div>
                </div>
                <h1>user_id</h1>
                <ul>
                  <li>
                    <Link to="/myPage">
                      <i className="bi bi-person"></i>이메일 :{" "}
                      <span>user_id@popcon.com</span>
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
            <div className="col-lg-9 ps-lg-5">
              <div className="main_title version_2">
                <span>
                  <em></em>
                </span>
                <h2>나의 찜 목록</h2>
              </div>
              <div className="tabs_detail">
                <div className="row">
                  {movies.map((movie, i) => {
                    if (i > 5) {
                      return;
                    }
                    if (i) {
                      return (
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                          <div className="strip" key={i}>
                            <figure>
                              <img
                                src={movie.content_img_ver}
                                className="lazy"
                                alt=""
                                width="533"
                                height="400"
                              />
                              <Link
                                to="/main/detailPage"
                                className="strip_info"
                              >
                                <div className="item_title">
                                  <h3>{movie.content_name}</h3>
                                </div>
                              </Link>
                            </figure>
                            <ul>
                              <li>
                                <a href="" className="author">
                                  <div className="author_thumb veryfied">
                                    <figure>
                                      <img
                                        src={movie.ott_code}
                                        alt=""
                                        className="lazy"
                                        width="100"
                                        height="100"
                                      />
                                      <img
                                        src={movie.age_rating}
                                        alt=""
                                        className="lazy"
                                        width="100"
                                        height="100"
                                      />
                                    </figure>
                                  </div>
                                  <h6>티빙</h6>
                                </a>
                              </li>
                              <li>
                                <Link to="#0" className="wish_bt">
                                  <i className="bi bi-heart-fill"></i>
                                </Link>
                                view: {movie.details_view_count}
                              </li>
                            </ul>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
              {/* /tabs_detail */}
            </div>
          </div>
          {/* /row */}
        </div>
        {/* /container */}
      </main>
    </div>
  );
};

export default LikePage;
