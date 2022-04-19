import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config";

const ExplorePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [total, setTotal] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const res = await axios.get(`${BASE_URL}/main/explore/list`);
        console.log(res);
        console.log(res.data.totalElements);
        setMovies(res.data.content);
        setTotal(res.data.totalElements);
      } catch (e) {
        console.error(e);
      }
      setIsLoading(false);
    })();
  }, []);

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
              <div className="row"></div>
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
            <h1>All: </h1>
            <span>{total}</span>
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
            {movies.map((movie, i) => (
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="strip" key={i}>
                  <figure>
                    <img
                      src={movie.contentImgVer}
                      className="lazy"
                      alt=""
                      width="533"
                      height="400"
                    />
                    <Link
                      to={`/main/detailPage/${movie.contentCode}`}
                      className="strip_info"
                    >
                      <div className="item_title">
                        <h3>{movie.contentName}</h3>
                      </div>
                    </Link>
                  </figure>
                  <ul>
                    <li>
                      <a href="" className="author">
                        <div className="author_thumb veryfied">
                          <figure>
                            <img
                              src={movie.ottImg}
                              alt=""
                              className="lazy"
                              width="100"
                              height="100"
                            />
                            <img
                              src={movie.ageRating}
                              alt=""
                              className="lazy"
                              width="100"
                              height="100"
                            />
                          </figure>
                        </div>
                        <h6>{movie.ottName}</h6>
                      </a>
                    </li>
                    <li>
                      <Link to="#0" className="wish_bt">
                        <i className="bi bi-heart-fill"></i>
                      </Link>
                      view: {movie.detailsViewCount}
                    </li>
                  </ul>
                </div>
              </div>
            ))}
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
