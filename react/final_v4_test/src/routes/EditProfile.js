import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Form, Check } from 'react-bootstrap';

const EditProfile = () => {
  return (
    <div>
      <main>
        <div className="container margin_30_40" id="wrapper" style={{ paddingTop: 60 }}>
          <div className="row">
            <div className="col-lg-3">
              <div className="main_profile edit_section">
                <div className="author">
                  <div className="author_thumb veryfied">
                    <figure>
                      <img src="img/profile.svg" alt="" className="lazy" width="100" height="100" />
                    </figure>
                  </div>
                </div>
                <h1>user_id</h1>
                <ul>
                  <li>
                    <Link to="/editProfile">
                      <i className="bi bi-person" ></i>OTT 수정하기
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
                <h2>OTT 수정</h2>
              </div>
              <div className="row mb-4">
                <div className="col-md-12">
                  <div className="form-group">
                    <p>OTT 목록</p>

                    <div className="row col-md-12 ps-lg-12 edit_ott_logos">

                      <div className="row col-lg-4 ps-lg-6" id="ott_edit">
                        <div className="col-md-7">
                          <img
                              id="netflix_edit"
                              src="https://velog.velcdn.com/images/joyoo1221/post/b807b710-c2e1-41a5-9175-b6607eac20d5/image.png"
                              alt="netflix_logo"
                              className="lazy"
                              width="100"
                              height="100"
                          />
                        </div>
                        <div className="col-md-5">
                          <Form.Check
                              type="switch"
                              id="custom-switch"
                              // label="Netflix"
                          />
                          <p>넷플릭스</p>
                        </div>
                        <div className="col-md-2"/>
                      </div>

                      <div className="row col-lg-4 ps-lg-6" id="ott_edit">
                        <div className="col-md-7">
                          <img
                            id="tving_edit"
                            src="https://velog.velcdn.com/images/joyoo1221/post/1a7edb63-cffc-4401-af47-06bc3e6b742c/image.png"
                            alt="tving_logo"
                            className="lazy"
                            width="95"
                            height="95"
                          />
                        </div>
                        <div className="col-md-5">
                          <Form.Check
                              type="switch"
                              id="custom-switch"
                          />
                          <p>티빙</p>
                        </div>
                      </div>

                      <div className="row col-lg-4 ps-lg-6" id="ott_edit">
                        <div className="col-md-7">
                          <img
                              id="wavve_edit"
                              src="https://velog.velcdn.com/images/joyoo1221/post/ee7a9963-cfbc-4531-a6b0-db244cf5d447/image.png"
                              alt="wavve_logo"
                              className="lazy"
                              width="95"
                              height="95"
                          />
                        </div>
                        <div className="col-md-5">
                          <Form.Check
                              type="switch"
                              id="custom-switch"
                          />
                          <p>웨이브</p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                {/*<div className="col-md-12">*/}
                {/*  <div className="form-group">*/}
                {/*    <label>Bio</label>*/}
                {/*    /!*<input type="text" className="form-control"/>*!/*/}
                {/*  </div>*/}
                {/*</div>*/}
              </div>
              {/*/row*/}
              <hr className="mt-3 mb-5"></hr>
              <p className="text-end mt-4">
                <Link to="/myPage" className="btn_1">
                  저장하기
                </Link>
              </p>
            </div>
          </div>
          {/*/row*/}
        </div>
        {/*/container*/}
      </main>
      {/*/main*/}

      {/*COMMON SCRIPTS*/}
      <script src="js/common_scripts.min.js"></script>
      <script src="js/bootstrap.bundle.min.js"></script>
      <script src="js/common_func.js"></script>
    </div>
  );
};

export default EditProfile;
