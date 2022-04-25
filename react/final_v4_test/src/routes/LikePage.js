import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BASE_URL } from '../config';
import Heart from '../components/Heart';
import MyProfile from '../components/MyProfile';

const LikePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [myProfile, setMyProfile] = useState('');
  const token = window.localStorage.getItem('token');

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(`${BASE_URL}/me/like`, {
          headers: {
            Authorization: token,
          },
        });
        setMovies(res.data);
        console.log(res.data);
        setIsLoading(false);
      } catch (e) {
        console.error(e);
      }
    })();

    (async () => {
      try {
        setIsLoading(true);

        const res = await axios.get(`${BASE_URL}/me`, {
          headers: {
            Authorization: token,
          },
        });
        console.log(res.data);
        setMyProfile(res.data);
        setIsLoading(false);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <div>
      <main>
        <div className="container margin_30_40" id="wrapper" style={{ paddingTop: 60 }}>
          {isLoading ? (
            <>Loading...</>
          ) : (
            <div className="row justify-content-center">
              <MyProfile myProfile={myProfile} col={3} />
              <div className="col-lg-9 ps-lg-5">
                <div className="main_title version_2">
                  <span>
                    <em></em>
                  </span>
                  <h2>나의 찜 목록</h2>
                </div>
                <div className="tabs_detail">
                  <div className="row">
                    {movies.map((movie) => (
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6" key={movie.userContentIndex}>
                        <div className="strip">
                          <figure>
                            <img src={movie.content.contentImgVer} className="lazy" alt={movie.content.contentName} width="533" height="400" />
                            <Link to={`/main/detailPage/${movie.contentCode}`} className="strip_info">
                              <div className="item_title">
                                <h5>{movie.content.contentName}</h5> view: {movie.content.detailsViewCount}
                              </div>
                            </Link>
                          </figure>
                          <ul>
                            <li>
                              <div className="author">
                                <div className="author_thumb veryfied">
                                  <figure>
                                    <img src={movie.content.ottImg} alt={movie.content.ottName} className="lazy" width="100" height="100" style={{ objectFit: 'cover' }} />
                                    <img src={movie.content.ageRating} alt="rate" className="lazy" width="100" height="100" />
                                  </figure>
                                </div>
                                <h6>{movie.content.ottName}</h6>
                              </div>
                            </li>
                            <li>
                              <Heart isLiked={true} contentCode={movie.content.contentCode} />
                            </li>
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* /tabs_detail */}
              </div>
            </div>
          )}

          {/* /row */}
        </div>
        {/* /container */}
      </main>
    </div>
  );
};

export default LikePage;
