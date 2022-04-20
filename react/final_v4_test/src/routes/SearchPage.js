import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../config';

const SearchPage = () => {
  const [movie, setMovie] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  let { contentCode } = useParams();
  let settag = movie.tagName;
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(`${BASE_URL}/movies/${contentCode}`);
        setMovie(res.data);
        setIsLoading(false);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <div>
      <main>
        <div className="filters_full element_to_stick">
          <div className="container">
            <div className="add_top_10 clearfix row">
              <div className="col-md-5 row" style={{ alignContent: 'center' }}>
                <div className="custom_select">
                  <select name="sort" id="sort" className="col-md-3" style={{ marginRight: 10 }}>
                    <option defaultValue="popularity">인기순</option>
                    <option value="rating">최신순</option>
                  </select>

                  {/*</div>*/}
                </div>
              </div>
              <div className="col-md-5 search_bar" style={{ marginLeft: 'auto' }}>
                <input type="text" className="form-control" placeholder="무엇을 찾고 있나요?" name="searchText" />
                <input type="submit" value={'검색'} />
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
              <input type="text" className="form-control" placeholder="Search..." />
            </div>
          </div>
          {/* /collapseSearch */}
        </div>

        <div className="container margin_60_40">
          <div className="row">
            <div className="col-xl-7 col-lg-7" style={({ display: 'flex' }, { justifyContent: 'center' })}>
              <figure>
                <img src={movie.contentImgVer} alt="" className="img-fluid rounded" height="700" width="400" />
              </figure>
            </div>

            <div className="col-xl-5 col-lg-5">
              <div className="detail_col">
                <div className="main_info clearfix mb-1" style={{ display: 'flex' }}>
                  <div className="item_desc">
                    <div className="mb-3">
                      <a href="author.html" className="author">
                        <div className="author_thumb veryfied" style={{ display: 'flex' }}>
                          <figure style={{ height: 30, width: 30 }}>
                            <img src={movie.ottImg} style={{ objectFit: 'cover' }} alt={movie.ottName} className="lazy loaded" data-was-processed="true" />
                          </figure>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="age" style={{ marginLeft: 'auto' }}>
                    <figure>
                      <img src={movie.ageRating} style={{ width: 30, height: 30, objectFit: 'cover' }} />
                    </figure>
                  </div>
                </div>
                <hr />
                <h1 className="mb-md-2">{movie.contentName}</h1>
                <p>{movie.contentPlot}</p>
                <br />
                <br />

                <div className="tabs_detail">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <a id="tab-A" href="#pane-A" class="nav-link active" data-bs-toggle="tab" role="tab">
                        서비스
                      </a>
                    </li>
                    <li className="nav-item">
                      <a id="tab-B" href="#pane-B" className="nav-link" data-bs-toggle="tab" role="tab">
                        개봉년도
                      </a>
                    </li>
                    <li className="nav-item">
                      <a id="tab-C" href="#pane-C" className="nav-link" data-bs-toggle="tab" role="tab">
                        정보
                      </a>
                    </li>
                  </ul>

                  <div className="tab-content" role="tablist">
                    <div id="pane-A" className="card tab-pane fade show active" role="tabpanel" aria-labelledby="tab-A">
                      <div className="card-header" role="tab" id="heading-A">
                        <h5>
                          <a className="collapsed" data-bs-toggle="collapse" href="#collapse-A">
                            서비스
                          </a>
                        </h5>
                      </div>
                      <div id="collapse-A" className="collapse" role="tabpanel" aria-labelledby="heading-A">
                        <div className="pt-4">
                          <div className="author_list">
                            <a href="author.html" className="author">
                              <div className="author_thumb veryfied">
                                <img src={movie.ottImg} alt="" className="lazy" style={{ width: 60, height: 60, objectFit: 'cover' }} />
                              </div>
                              <div>
                                <h6>{movie.ottName}</h6>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div id="pane-B" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-B">
                      <div className="card-header" role="tab" id="heading-B">
                        <h5>
                          <a className="collapsed" data-bs-toggle="collapse" href="#collapse-B">
                            개봉년도
                          </a>
                        </h5>
                      </div>
                      <div id="collapse-B" className="collapse" role="tabpanel" aria-labelledby="heading-B">
                        <div className="pt-4">
                          <div className="row author_list">
                            <div className="col-lg-12 pt-5">
                              <a href="" className="author">
                                <div className="author_thumb veryfied"></div>
                                <div>
                                  <span>{movie.releaseYear}</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div id="pane-C" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-C">
                      <div className="card-header" role="tab" id="heading-C">
                        <h5>
                          <a className="collapsed" data-bs-toggle="collapse" href="#collapse-C">
                            출연진/감독
                          </a>
                        </h5>
                      </div>
                      <div id="collapse-C" className="collapse" role="tabpanel" aria-labelledby="heading-C">
                        <div className="pt-4">
                          <div className="row">
                            <div className="col-lg-12 pt-5">
                              <ul className="bullets">
                                <li>
                                  감독 <span>{movie.director}</span>
                                </li>
                                <li>
                                  출연
                                  <span>{movie.actor}</span>
                                </li>
                                <li>
                                  태그
                                  {/* // key값이 settag인 자료를 뽑아 */}
                                  {/*{tag[settag]}*/}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container margin_60_40_second" style={{ marginTop: '20px' }}>
          <h4>비슷한 콘텐츠</h4>
          <hr />
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="strip">
                <figure>
                  <img
                    src="https://images.justwatch.com/poster/262548358/s592/sanae-majseon"
                    data-src="https://images.justwatch.com/poster/262548358/s592/sanae-majseon"
                    className="lazy"
                    alt=""
                    width="533"
                    height="400"
                  />
                  <a href="detail-page.html" className="strip_info">
                    <div className="item_title">
                      <h3>사내 맞선</h3>
                    </div>
                  </a>
                </figure>
                <ul>
                  <li>
                    <a href="author.html" className="author">
                      <div className="author_thumb veryfied">
                        <figure>
                          <img src="img/tving_logo.jpeg" data-src="img/tving_logo.jpeg" alt="" className="lazy" width="100" height="100" />
                        </figure>
                      </div>
                      <h6>Tving</h6>
                    </a>
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="strip">
                <figure>
                  <img src="img/items/item-1-placeholder.png" data-src="img/poster/오징어게임.jpeg" className="lazy" alt="" width="533" height="400" />
                  <a href="detail-page.html" className="strip_info">
                    <div className="item_title">
                      <h3>오징어게임</h3>
                    </div>
                  </a>
                </figure>
                <ul>
                  <li>
                    <a href="author.html" class="author">
                      <div className="author_thumb">
                        <figure>
                          <img src="img/netflix_logo.jpeg" data-src="img/netflix_logo.jpeg" alt="" className="lazy" width="100" height="100" />
                        </figure>
                      </div>
                      <h6>Netflix</h6>
                    </a>
                  </li>
                  <li>
                    <a href="#0" className="wish_bt">
                      <i class="bi bi-heart-fill"></i>
                    </a>
                    50
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div class="strip">
                <figure>
                  <img
                    src="https://image.tving.com/upload/cms/caip/CAIP0900/P001565742.jpg/dims/resize/F_webp,400"
                    data-src="https://image.tving.com/upload/cms/caip/CAIP0900/P001565742.jpg/dims/resize/F_webp,400"
                    className="lazy"
                    alt=""
                    width="533"
                    height="400"
                  />
                  <a href="detail-page.html" className="strip_info">
                    <div className="item_title">
                      <h3>돼지의 왕</h3>
                    </div>
                  </a>
                </figure>
                <ul>
                  <li>
                    <a href="author.html" className="author">
                      <div className="author_thumb veryfied">
                        <figure>
                          <img src="img/tving_logo.jpeg" data-src="img/tving_logo.jpeg" alt="" class="lazy" width="100" height="100" />
                        </figure>
                      </div>
                      <h6>Tving</h6>
                    </a>
                  </li>
                  <li>
                    <a href="#0" class="wish_bt">
                      <i class="bi bi-heart-fill"></i>
                    </a>
                    159
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <script src="js/common_scripts.min.js"></script>
      <script src="js/bootstrap.bundle.min.js"></script>
      <script src="js/common_func.js"></script>
    </div>
  );
};

export default SearchPage;
