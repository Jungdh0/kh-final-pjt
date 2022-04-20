import React from 'react';

const SearchPage = () => {
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
                    <div className="age" style={{ marginleft: 'auto' }}>
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
                                    {tag[settag]}
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

              {/* <div className="container margin_60_40_second" style={{ marginTop: 20 }}>
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
                              <Link to="/detailPage" className="author">
                                <div className="author_thumb veryfied">
                                  <figure>
                                    <img src="https://velog.velcdn.com/images/joyoo1221/post/1a7edb63-cffc-4401-af47-06bc3e6b742c/image.png" alt="" className="lazy" width="100" height="100" />
                                  </figure>
                                </div>
                                <h6>Tving</h6>
                              </Link>
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
            </div> */}
              {/* /col */}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
