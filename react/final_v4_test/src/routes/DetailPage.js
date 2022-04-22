/* eslint-disable default-case */
import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL, tags } from '../config';
import Reco from '../components/Reco';
// 자료형에 보여주고 싶은 html 저장

const DetailPage = () => {
  const [movie, setMovie] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { contentCode } = useParams();
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
      return () => {
        setIsLoading(false);
      };
    })();
  }, []);

  return (
    <div>
      <main>
        <div className="container margin_60_40" id="wrapper">
          {isLoading ? (
            <>loading...</>
          ) : (
            <div className="row">
              <div className="col-xl-7 col-lg-7" style={{ display: 'flex', justifyContent: 'center' }}>
                <figure>
                  <img src={movie.contentImgVer} alt="" className="img-fluid rounded" height="700" width="400" />
                </figure>
              </div>
              {/* /col */}

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
                  {/* <p className="item_price clearfix" style={{ display: 'flex', justifyContent: 'end' }}>
                  <a href="" className="btn_1 modal_popup">
                    보러 가기
                  </a>
                </p> */}

                  <div className="tabs_detail">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item">
                        <a id="tab-A" href="#pane-A" className="nav-link active" data-bs-toggle="tab" role="tab">
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
                          <div className="pt-4" id="service_ott">
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
                      {/* /tab */}
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
                      {/* /tab */}
                      <div id="pane-C" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-C">
                        <div className="card-header" role="tab" id="heading-C">
                          <h5>
                            <a className="collapsed" data-bs-toggle="collapse" href="#collapse-C">
                              정보
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
                                    <span>{tags[movie.tagName]}</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /tab */}
                    </div>
                    {/* /tab-content */}
                  </div>
                  {/* /tabs_detail */}
                </div>
                {/* /detail_col */}
              </div>
              <Reco tagIndex={movie.tagName} />
            </div>
          )}
        </div>
      </main>

      {/* COMMON SCRIPTS */}
      <script src="js/common_scripts.min.js"></script>
      <script src="js/bootstrap.bundle.min.js"></script>
      <script src="js/common_func.js"></script>
    </div>
  );
};

export default DetailPage;
