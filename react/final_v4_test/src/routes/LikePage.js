import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BASE_URL } from '../config';
import Heart from '../components/Heart';

const LikePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const userCode = 1; //임시

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(`${BASE_URL}/user/${userCode}/like`);
        setMovies(res.data);
        console.log(res.data);
        setIsLoading(false);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  //movie[0].content.actor

  return (
    <div>
      <main>
        <div className="container margin_30_40" id="wrapper" style={{ paddingTop: 60 }}>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="main_profile edit_section">
                <div className="author">
                  <div className="author_thumb veryfied">
                    <figure>
                      <img src="https://velog.velcdn.com/images/joyoo1221/post/b268dd99-ddf0-40b8-8d94-17abf8ca2933/image.png" alt="" className="lazy" width="105" height="105" />
                    </figure>
                  </div>
                </div>
                <h1>user_id</h1>
                <ul>
                  <li>
                    <Link to="/main/myPage">
                      <i className="bi bi-person"></i>이메일 : <span>user_id@popcon.com</span>
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
                {isLoading ? (
                  <>loading...</>
                ) : (
                  <div className="row">
                    {movies.map((movie) => (
                      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={movie.userContentIndex}>
                        <div className="strip">
                          <figure>
                            <img src={movie.content.contentImgVer} className="lazy" alt={movie.content.contentName} width="533" height="400" />
                            <Link to={`/main/detailPage/${movie.contentCode}`} className="strip_info">
                              <div className="item_title">
                                <h3>{movie.content.contentName}</h3>
                              </div>
                            </Link>
                          </figure>
                          <ul>
                            <li>
                              <a href="" className="author">
                                <div className="author_thumb veryfied">
                                  <figure>
                                    <img src={movie.content.ottImg} alt={movie.content.ottName} className="lazy" width="100" height="100" style={{ objectFit: 'cover' }} />
                                    <img src={movie.content.ageRating} alt="rate" className="lazy" width="100" height="100" />
                                  </figure>
                                </div>
                                <h6>{movie.content.ottName}</h6>
                              </a>
                            </li>
                            <li>
                              <Heart isLiked={true} contentCode={movie.content.contentCode} />
                              view: {movie.content.detailsViewCount}
                            </li>
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
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
