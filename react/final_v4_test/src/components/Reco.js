import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../config';
import { Link } from 'react-router-dom';

const Reco = ({ tagIndex }) => {
  console.log(tagIndex);

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${BASE_URL}/movies?size=3&sort=tagName,asc `);
        setMovie(res.data.content);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <div className="container margin_60_40_second" style={{ marginTop: 20 }}>
      <hr />
      <div className="main_title version_2">
        <span>
          <em></em>
        </span>
        <h2>비슷한 콘텐츠</h2>
      </div>
      <div className="row">
        {movie.map((movie, i) => {
          return (
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="strip">
                <figure>
                  <img src={movie.contentImgVer} className="lazy" alt="" width="533" height="400" />
                  <a href="detail-page.html" className="strip_info">
                    <div className="item_title">
                      <h3>{movie.contentName}</h3>
                    </div>
                  </a>
                </figure>
                <ul>
                  <li>
                    <Link to={`/main/detailPage/${movie.contentCode}`} className="author">
                      <div className="author_thumb veryfied">
                        <figure>
                          <img src={movie.ottImg} alt="" className="lazy" width="100" height="100" style={{ objectFit: 'cover' }} />
                        </figure>
                      </div>
                      <h6>{movie.ottName}</h6>
                    </Link>
                    {/* </Link> */}
                  </li>
                  <li>
                    <a href="#0" className="wish_bt">
                      <i className="bi bi-heart-fill"></i>
                    </a>
                    129
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reco;
