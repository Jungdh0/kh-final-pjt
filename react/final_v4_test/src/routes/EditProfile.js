import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Modal } from 'react-bootstrap';

const EditProfile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                      <img src="https://velog.velcdn.com/images/joyoo1221/post/b268dd99-ddf0-40b8-8d94-17abf8ca2933/image.png" alt="" className="lazy" width="100" height="100" />
                    </figure>
                  </div>
                </div>
                <h1>user_id</h1>
                <ul>
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
                <h2>OTT 수정하기</h2>
              </div>
              <div className="row mb-4">
                <div className="col-md-12 px-2">
                  <div className="form-group">
                    <div className="row col-md-12 ps-lg-12 mx-auto edit_ott_logos">
                      <div className="row col-lg-4 ps-lg-6 pt-3 ">
                        <div className="col-md-7 col-sm-5" id="ott_edit">
                          <img
                            id="netflix_edit"
                            src="https://velog.velcdn.com/images/joyoo1221/post/b807b710-c2e1-41a5-9175-b6607eac20d5/image.png"
                            alt="netflix_logo"
                            className="lazy"
                            width="100"
                            height="100"
                          />
                        </div>
                        <div className="col-md-5 col-sm-7">
                          <Form.Check
                            type="switch"
                            id="custom-switch"
                            name="otts"
                            // label="Netflix"
                          />
                          <p>넷플릭스</p>
                        </div>
                        <div className="col-md-2" />
                      </div>

                      <div className="row col-lg-4 ps-lg-6 pt-3">
                        <div className="col-md-7 col-sm-5" id="ott_edit">
                          <img
                            id="tving_edit"
                            src="https://velog.velcdn.com/images/joyoo1221/post/dd975d66-1ecb-4ab1-9067-0b6050ecb399/image.png"
                            alt="tving_logo"
                            className="lazy"
                            width="95"
                            height="95"
                          />
                        </div>
                        <div className="col-md-5 col-sm-7">
                          <Form.Check
                            type="switch"
                            id="custom-switch"
                            name="otts"
                            // label="Tving"
                          />
                          <p>티빙</p>
                        </div>
                      </div>

                      <div className="row col-lg-4 ps-lg-6 pt-3">
                        <div className="col-md-7 col-sm-5" id="ott_edit">
                          <img
                            id="wavve_edit"
                            src="https://velog.velcdn.com/images/joyoo1221/post/ee7a9963-cfbc-4531-a6b0-db244cf5d447/image.png"
                            alt="wavve_logo"
                            className="lazy"
                            width="95"
                            height="95"
                          />
                        </div>
                        <div className="col-md-5 col-sm-7">
                          <Form.Check
                            type="switch"
                            id="custom-switch"
                            name="otts"
                            // label="Wave"
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
                <Link to="/main/myPage" className="btn_1">
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
