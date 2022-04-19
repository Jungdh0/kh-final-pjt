import React from "react";
import movies from "../sampledata/샘플.json";
import { Link } from "react-router-dom";
import { Dropdown } from "bootstrap";

const ExplorePage = () => {
  return (
    <div>
      <main>
        <div className="filters_full element_to_stick">
          <div className="container">
            <div className="add_top_10 clearfix row">
              <div className="col-md-5 row" style={{ alignContent: "center" }}>
                <div className="custom_select">
                  <select
                    name="sort"
                    id="sort"
                    className="col-md-3"
                    style={{ marginRight: 10 }}
                  >
                        <option defaultValue="popularity">인기순</option>
                    <option value="rating">최신순</option>
                  </select>

                  {/*</div>*/}
                  <a
                    href="#collapseFilters"
                    data-bs-toggle="collapse"
                    className="col-md-5 btn_filters"
                  >
                    <i className="bi bi-filter"></i>
                    {/*<span>Filters</span>*/}
                  </a>
                </div>
              </div>
              <div
                className="col-md-5 search_bar"
                style={{ marginLeft: "auto" }}
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="무엇을 찾고 있나요?"
                />
                <input type="submit" value={"검색"} />
              </div>
            </div>
          </div>
          <div className="collapse filters_2" id="collapseFilters">
            <div className="container margin_detail">
              <div className="row">
                <div className="col-md-3">
                  <div className="filter_type">
                    <h6>장르별</h6>
                    <ul id="genre_list">
                      <li>
                        <label className="container_check">
                          드라마 <small>112</small>
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="container_check">
                          SF <small>90</small>
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="container_check">
                          로맨스 <small>140</small>
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="container_check">
                          액션 <small>43</small>
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="container_check">
                          공포 <small>23</small>
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="container_check">
                          스릴러 <small>23</small>
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="filter_type">
                    <h6>Status</h6>
                    <ul>
                      <li>
                        <label className="container_radio">
                          시즌 진행중<small>11</small>
                          <input type="radio" name="filter_4" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="container_radio">
                          완결<small>08</small>
                          <input type="radio" name="filter_4" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* /row */}
            </div>
          </div>
          {/* /filters */}
          <div className="collapse" id="collapseSearch">
            <div className="search_bar_list">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
              />
            </div>
          </div>
          {/* /collapseSearch */}
        </div>
        {/* /filters_full */}
        <div className="container margin_30_40">
          <div className="page_header">
            <div className="breadcrumbs">
              <ul>
                <li>
                  <Link to="/mainPage">Home</Link>
                </li>
                <li>
                  <Link to="#">category</Link>
                </li>
                <li>인기 콘텐츠</li>
              </ul>
            </div>
            <h1>All:</h1>
            <span> 10 found</span>
            <nav className="sausage-links">
              <ul>
                <li>
                  <a href="">#맛깔나는</a>
                </li>
                <li>
                  <a href="">#퀸카가되고싶어?</a>
                </li>
                <li>
                  <a href="">#방구석여행</a>
                </li>
                <li>
                  <a href="">#미친상상력의비밀</a>
                </li>
                <li>
                  <a href="">#냠냠쩝쩝</a>
                </li>
                <li>
                  <a href="">#잔혹한</a>
                </li>
                <li>
                  <a href="">#심장마비오는</a>
                </li>
                <li>
                  <a href="">#브금맛집</a>
                </li>
                <li>
                  <a href="">#빨간맛궁금해허니</a>
                </li>
                <li>
                  <a href="">#감정을파고드는</a>
                </li>
                <li>
                  <a href="">#폰할머니집</a>
                </li>
                <li>
                  <a href="">#당신의기숙사는?</a>
                </li>
              </ul>
            </nav>
          </div>
          {/* /page_header */}
          <div className="row">
            {movies.map((movie, i) => {
              if (i > 10) {
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
                        <Link to="/main/detailPage" className="strip_info">
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
          {/* /row */}
          <div className="pagination_fg mb-4">
            <Link to="#">«</Link>
            <Link to="#" className="active">
              1
            </Link>
            <Link to="#">»</Link>
          </div>
        </div>
        {/* /container */}
      </main>
    </div>
  );
};

export default ExplorePage;
