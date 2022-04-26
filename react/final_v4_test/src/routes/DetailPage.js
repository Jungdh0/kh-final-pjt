/* eslint-disable default-case */
import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL, tags } from '../config';
import Reco from '../components/Reco';
import Heart from '../components/Heart';
// 자료형에 보여주고 싶은 html 저장

const DetailPage = () => {
  const [movie, setMovie] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [likes, setLikes] = useState([]);

  const token = window.localStorage.getItem('token');

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
  }, [contentCode]);

  useEffect(() => {
    let isMount = true;
    (async () => {
      try {
        const res = await axios.get(`${BASE_URL}/me/like`, {
          headers: {
            Authorization: token,
          },
        });

        const likes = res.data.map((element) => (element = element.contentCode));
        setLikes(likes); // 좋아요 누른 컨텐츠 contentCode만 추출해서 배열에 저장
      } catch (e) {
        console.error(e);
      }
      return () => {
        isMount = false;
      };
    })();
  }, []);

  const isLiked = (contentCode) => {
    return likes.includes(contentCode); //값이 likes 배열에 있는지 확인함
  };

  return (
    <div>
      <main>
        <div className="container margin_60_40" id="wrapper">
          {isLoading ? (
            <>loading...</>
          ) : (
            <div className="row">
              <div className="col-xl-7 col-lg-7" style={{ display: 'flex', justifyContent: 'center'}}>
                <figure>
                  <img src={movie.contentImgVer} alt="" className="img-fluid rounded" height="700" width="400" />
                </figure>
              </div>
              {/* /col */}

              <div className="col-xl-5 col-lg-5">
                <div className="detail_col">
                  <div className="main_info clearfix mx-1 px-1" style={{ display: 'flex' }}>
                    <div style={{ marginLeft: 'auto' }}>
                      <Heart isLiked={isLiked(movie.contentCode)} contentCode={movie.contentCode} />
                    </div>
                  </div>
                  <hr style={{ marginBottom: 10, marginTop: 10 }} />
                  <h1 className="pb-1 px-2">{movie.contentName}</h1>
                  <div className="age px-2 pb-2">
                    <img src={movie.ageRating} alt="" style={{ width: 20, height: 20, objectFit: 'cover' }} />
                    <span> | {movie.runningTime}</span>
                    <span> | {movie.seasonsInfo}</span>
                    <span> | {tags[movie.tagName]}</span>
                  </div>
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
                              <a className="author">
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
                                    <span className="tag">{tags[movie.tagName]}</span>
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
    </div>
  );
};

export default DetailPage;
