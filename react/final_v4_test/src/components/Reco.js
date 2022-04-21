import React from 'react';
import movie from '../sampledata/샘플.json';

const Reco = () => {
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
          if (i > 4) {
            return;
          }
          if (i) {
            return (
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="strip">
                  <figure>
                    <img src={movie.content_img_ver} className="lazy" alt="" width="533" height="400" />
                    <a href="detail-page.html" className="strip_info">
                      <div className="item_title">
                        <h3>{movie.content_name}</h3>
                      </div>
                    </a>
                  </figure>
                  <ul>
                    <li>
                      {/* <Link to="/detailPage" className="author"> */}
                      <div className="author">
                        <div className="author_thumb veryfied">
                          <figure>
                            <img
                              src="https://velog.velcdn.com/images/joyoo1221/post/1a7edb63-cffc-4401-af47-06bc3e6b742c/image.png"
                              alt=""
                              className="lazy"
                              width="100"
                              height="100"
                              style={{ objectFit: 'cover' }}
                            />
                          </figure>
                        </div>
                        <h6>Tving</h6>
                      </div>
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
          }
        })}
      </div>
    </div>
  );
};

export default Reco;
