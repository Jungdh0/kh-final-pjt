import React from "react";
import movies from "../sampledata/OTT별 작품 - 샘플 데이터.json";
import {Link} from "react-router-dom";

const LikePage = () => {
  return <div>
    <main>
      <div className="container margin_30_40" id="wrapper" style={{paddingTop: 60}}>
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-6">
            <div className="main_profile">
              <div className="author">
                <div className="author_thumb veryfied">
                  <figure>
                    <img
                        src="img/profile.svg"
                        data-src="img/profile.svg"
                        alt=""
                        className="lazy"
                        width="100"
                        height="100"
                    />
                  </figure>
                </div>
              </div>
              <h1>User Name</h1>

              <small>Member since July 25 2021</small>
              <div className="follow_buttons">
                <ul>
                  <li>
                    <a href="#0"><i className="bi bi-instagram"></i></a>
                  </li>
                  <li>
                    <a href="#0"><i className="bi bi-facebook"></i></a>
                  </li>
                  <li>
                    <a href="#0"><i className="bi bi-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#0"><i className="bi bi-youtube"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-9 ps-lg-5">
            <div className="tabs_detail">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <h3>나의 찜 목록</h3>
                </li>
              </ul>
              <div className="tab-content" role="tablist">
                <div
                    id="pane-A"
                    className="card tab-pane fade show active"
                    role="tabpanel"
                >
                  <div className="card-header" role="tab" id="heading-A">
                    <h5>
                      <a
                          className="collapsed"
                          data-bs-toggle="collapse"
                          href="#collapse-A"
                      >
                        내가 찜한 목록
                      </a>
                    </h5>
                  </div>
                  <div id="collapse-A" className="collapse" role="tabpanel">
                    <div className="row mt-lg-5 mt-3">
                      {movies.map((movie, i) => {
                        if (i > 22) {
                          return;
                        }
                        if (i > 5) {
                          return (
                              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                <div className="strip" key={i}>
                                  <figure>
                                    <img
                                        src={movie.content_img_ver}
                                        className="lazy"
                                        alt=""
                                        width="533"
                                        height="400"
                                    />
                                    <Link to="/detailPage" className="strip_info">
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
                                                src="img/tving_logo.jpeg"
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
                                      <a href="#0" className="wish_bt"
                                      ><i className="bi bi-heart-fill"></i
                                      ></a>
                                      159
                                      view: {movie.details_view_count}
                                    </li>

                                  </ul>
                                </div>
                              </div>
                          );
                        }
                        })}
                    </div>
                    {/* /row */}
                  </div>
                </div>
                {/* /tab */}
              </div>
              {/* /tab-content */}
            </div>
            {/* /tabs_detail */}
          </div>
        </div>
        {/* /row */}
      </div>
      {/* /container */}
    </main></div>;
};

export default LikePage;
