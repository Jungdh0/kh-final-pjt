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
                        Created
                      </a>
                    </h5>
                  </div>
                  <div id="collapse-A" className="collapse" role="tabpanel">
                    <div className="row mt-lg-5 mt-3">
                      {movies.map((movie, i) => {
                        if (i > 22) {
                          return;
                        }
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
                      })}
                    </div>
                    {/* /row */}
                  </div>
                </div>
                {/* /tab */}
                <div id="pane-B" className="card tab-pane fade" role="tabpanel">
                  <div className="card-header" role="tab" id="heading-B">
                    <h5>
                      <a
                          className="collapsed"
                          data-bs-toggle="collapse"
                          href="#collapse-B"
                      >
                        On Sale
                      </a>
                    </h5>
                  </div>
                  <div id="collapse-B" className="collapse" role="tabpanel">
                    <div className="row mt-lg-5 mt-3">
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                        <div className="strip">
                          <figure>
                            <a href="#modal-dialog" className="btn_1 modal_popup"
                            >Place a bid</a
                            >
                            <img
                                src="img/items/item-1-placeholder.png"
                                data-src="img/items/item-12.jpg"
                                className="lazy"
                                alt=""
                                width="533"
                                height="400"
                            />
                            <a href="detail-page.html" className="strip_info">
                              <div className="item_title">
                                <h3>Brain Storm</h3>
                                <small>2.95 ETH</small>
                              </div>
                            </a>
                          </figure>
                          <ul>
                            <li>
                              <a href="author.html" className="author">
                                <div className="author_thumb">
                                  <figure>
                                    <img
                                        src="img/avatar-placeholder.png"
                                        data-src="img/avatar1.jpg"
                                        alt=""
                                        className="lazy"
                                        width="100"
                                        height="100"
                                    />
                                  </figure>
                                </div>
                                <h6>@George_lucas</h6>
                              </a>
                            </li>
                            <li>
                              <a href="#0" className="wish_bt"
                              ><i className="bi bi-heart-fill"></i
                              ></a>
                              50
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                        <div className="strip">
                          <figure>
                            <a href="#modal-dialog" className="btn_1 modal_popup"
                            >Place a bid</a
                            >
                            <img
                                src="img/items/item-1-placeholder.png"
                                data-src="img/items/item-11.jpg"
                                className="lazy"
                                alt=""
                                width="533"
                                height="400"
                            />
                            <a href="detail-page.html" className="strip_info">
                              <div className="item_title">
                                <h3>Hello World!</h3>
                                <small>1.25 ETH</small>
                              </div>
                            </a>
                          </figure>
                          <ul>
                            <li>
                              <a href="author.html" className="author">
                                <div className="author_thumb">
                                  <figure>
                                    <img
                                        src="img/avatar-placeholder.png"
                                        data-src="img/avatar1.jpg"
                                        alt=""
                                        className="lazy"
                                        width="100"
                                        height="100"
                                    />
                                  </figure>
                                </div>
                                <h6>@George_lucas</h6>
                              </a>
                            </li>
                            <li>
                              <a href="#0" className="wish_bt"
                              ><i className="bi bi-heart-fill"></i
                              ></a>
                              50
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                        <div className="strip">
                          <figure>
                            <a href="#modal-dialog" className="btn_1 modal_popup"
                            >Place a bid</a
                            >
                            <img
                                src="img/items/item-1-placeholder.png"
                                data-src="img/items/item-10.jpg"
                                className="lazy"
                                alt=""
                                width="533"
                                height="400"
                            />
                            <a href="detail-page.html" className="strip_info">
                              <div className="item_title">
                                <h3>Clock Ocean</h3>
                                <small>0.95 ETH</small>
                              </div>
                            </a>
                          </figure>
                          <ul>
                            <li>
                              <a href="author.html" className="author">
                                <div className="author_thumb">
                                  <figure>
                                    <img
                                        src="img/avatar-placeholder.png"
                                        data-src="img/avatar1.jpg"
                                        alt=""
                                        className="lazy"
                                        width="100"
                                        height="100"
                                    />
                                  </figure>
                                </div>
                                <h6>@George_lucas</h6>
                              </a>
                            </li>
                            <li>
                              <a href="#0" className="wish_bt"
                              ><i className="bi bi-heart-fill"></i
                              ></a>
                              50
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* /row */}
                  </div>
                </div>
                {/* /tab */}
                <div id="pane-C" className="card tab-pane fade" role="tabpanel">
                  <div className="card-header" role="tab" id="heading-E">
                    <h5>
                      <a
                          className="collapsed"
                          data-bs-toggle="collapse"
                          href="#collapse-C"
                      >
                        Following
                      </a>
                    </h5>
                  </div>
                  <div id="collapse-C" className="collapse" role="tabpanel">
                    <div className="follow_list mt-lg-3">
                      <ul>
                        <li>
                          <div className="author">
                            <div className="author_thumb veryfied">
                              <i className="bi bi-check"></i>
                              <figure>
                                <img
                                    src="img/avatar-placeholder.png"
                                    data-src="img/avatar1.jpg"
                                    alt=""
                                    className="lazy"
                                    width="100"
                                    height="100"
                                />
                              </figure>
                            </div>
                            <div>
                              <h6>@George_lucas</h6>
                              <a href="#0">Unfollow</a>
                            </div>
                          </div>
                          <div className="thumbs_artwork">
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_1.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_2.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_3.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_4.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                          </div>
                        </li>
                        <li>
                          <div className="author">
                            <div className="author_thumb veryfied">
                              <i className="bi bi-check"></i>
                              <figure>
                                <img
                                    src="img/avatar-placeholder.png"
                                    data-src="img/avatar2.jpg"
                                    alt=""
                                    className="lazy"
                                    width="100"
                                    height="100"
                                />
                              </figure>
                            </div>
                            <div>
                              <h6>@Monica_claus</h6>
                              <a href="#0">Unfollow</a>
                            </div>
                          </div>
                          <div className="thumbs_artwork">
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_5.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_6.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_7.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_8.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                          </div>
                        </li>
                        <li>
                          <div className="author">
                            <div className="author_thumb veryfied">
                              <i className="bi bi-check"></i>
                              <figure>
                                <img
                                    src="img/avatar-placeholder.png"
                                    data-src="img/avatar3.jpg"
                                    alt=""
                                    className="lazy"
                                    width="100"
                                    height="100"
                                />
                              </figure>
                            </div>
                            <div>
                              <h6>@Frederick</h6>
                              <a href="#0">Unfollow</a>
                            </div>
                          </div>
                          <div className="thumbs_artwork">
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_9.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_10.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_11.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_12.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* /follow_list */}
                  </div>
                </div>
                {/* /tab */}
                <div id="pane-D" className="card tab-pane fade" role="tabpanel">
                  <div className="card-header" role="tab" id="heading-D">
                    <h5>
                      <a
                          className="collapsed"
                          data-bs-toggle="collapse"
                          href="#collapse-D"
                      >
                        Followers
                      </a>
                    </h5>
                  </div>
                  <div id="collapse-D" className="collapse" role="tabpanel">
                    <div className="follow_list mt-lg-3">
                      <ul>
                        <li>
                          <a href="#0" className="author">
                            <div className="author_thumb veryfied">
                              <i className="bi bi-check"></i>
                              <figure>
                                <img
                                    src="img/avatar-placeholder.png"
                                    data-src="img/avatar1.jpg"
                                    alt=""
                                    className="lazy"
                                    width="100"
                                    height="100"
                                />
                              </figure>
                            </div>
                            <h6>@George_lucas</h6>
                          </a>
                          <div className="thumbs_artwork">
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_1.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_2.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_3.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_4.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                          </div>
                        </li>
                        <li>
                          <a href="#0" className="author">
                            <div className="author_thumb veryfied">
                              <i className="bi bi-check"></i>
                              <figure>
                                <img
                                    src="img/avatar-placeholder.png"
                                    data-src="img/avatar2.jpg"
                                    alt=""
                                    className="lazy"
                                    width="100"
                                    height="100"
                                />
                              </figure>
                            </div>
                            <h6>@Monica_claus</h6>
                          </a>
                          <div className="thumbs_artwork">
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_5.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_6.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_7.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_8.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                          </div>
                        </li>
                        <li>
                          <a href="#0" className="author">
                            <div className="author_thumb veryfied">
                              <i className="bi bi-check"></i>
                              <figure>
                                <img
                                    src="img/avatar-placeholder.png"
                                    data-src="img/avatar3.jpg"
                                    alt=""
                                    className="lazy"
                                    width="100"
                                    height="100"
                                />
                              </figure>
                            </div>
                            <h6>@Frederick</h6>
                          </a>
                          <div className="thumbs_artwork">
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_9.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_10.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_11.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                            <figure>
                              <img
                                  src="img/items/item-1-placeholder.png"
                                  data-src="img/follow_list_pic_12.jpg"
                                  alt=""
                                  className="lazy img-fluid"
                                  width="220"
                                  height="170"
                              />
                            </figure>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* /follow_list */}
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
