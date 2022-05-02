import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import { BASE_URL } from '../config';
import MyProfile from '../components/MyProfile';

const EditProfile = () => {
  const [ottList, setOttList] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [myProfile, setMyProfile] = useState('');

  const navigate = useNavigate();

  const token = window.localStorage.getItem('token');
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${BASE_URL}/me/ott`, {
          headers: {
            Authorization: token,
          },
        });
        setOttList(res.data);
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

  const handleChange = (e) => {
    const ottName = e.target.value;
    const isChecked = e.target.checked;

    console.log(ottName + ':' + isChecked);

    const nextOttList = ottList;
    nextOttList[ottName] = isChecked;
    console.log(nextOttList);

    setOttList(nextOttList);
  };

  const onSubmit = async (e) => {
    console.log(ottList);

    try {
      const res = await axios.put(`${BASE_URL}/me/ott`, ottList, {
        headers: {
          Authorization: token,
        },
      });
      console.log(res);
      navigate('/main/myPage');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <main>
        <div className="container margin_30_40" id="wrapper" style={{ paddingTop: 60 }}>
          {isLoading ? (
            <>Loading...</>
          ) : (
            <div className="row">
              <MyProfile col={3} myProfile={myProfile} />
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
                          <div className="col" id="ott_edit">
                            <img
                              id="netflix_edit"
                              src="https://velog.velcdn.com/images/joyoo1221/post/b807b710-c2e1-41a5-9175-b6607eac20d5/image.png"
                              alt="netflix_logo"
                              className="lazy"
                              width="100"
                              height="100"
                            />
                          </div>
                          <div className="col">
                            <Form.Check value="netflix" type="switch" id="custom-switch" name="otts" onClick={handleChange} defaultChecked={ottList.netflix} />
                            <p>넷플릭스</p>
                          </div>
                        </div>

                        <div className="row col-lg-4 ps-lg-6 pt-3">
                          <div className="col" id="ott_edit">
                            <img
                              id="tving_edit"
                              src="https://velog.velcdn.com/images/joyoo1221/post/dd975d66-1ecb-4ab1-9067-0b6050ecb399/image.png"
                              alt="tving_logo"
                              className="lazy"
                              width="95"
                              height="95"
                            />
                          </div>
                          <div className="col">
                            <Form.Check value="tving" type="switch" id="custom-switch" name="otts" onClick={handleChange} defaultChecked={ottList.tving} />
                            <p>티빙</p>
                          </div>
                        </div>

                        <div className="row col-lg-4 ps-lg-6 pt-3">
                          <div className="col" id="ott_edit">
                            <img
                              id="wavve_edit"
                              src="https://velog.velcdn.com/images/joyoo1221/post/ee7a9963-cfbc-4531-a6b0-db244cf5d447/image.png"
                              alt="wavve_logo"
                              className="lazy"
                              width="95"
                              height="95"
                            />
                          </div>
                          <div className="col">
                            <Form.Check value="wavve" type="switch" id="custom-switch" name="otts" onClick={handleChange} defaultChecked={ottList.wavve} />
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
                  <button onClick={onSubmit} className="btn_1">
                    저장하기
                  </button>
                </p>
              </div>
            </div>
          )}

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
