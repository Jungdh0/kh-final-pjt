import React, { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { BASE_URL } from '../config';
import axios from 'axios';
import MyProfile from '../components/MyProfile';

const MyPage = () => {
  // const [image, setImage] = useState('https://velog.velcdn.com/images/joyoo1221/post/b268dd99-ddf0-40b8-8d94-17abf8ca2933/image.png');
  // const fileInput = useRef(null);

  const navigate = useNavigate();
  const [ottList, setOttList] = useState('');
  const [myProfile, setMyProfile] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const token = window.localStorage.getItem('token');
  console.log(token);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(`${BASE_URL}/me/ott`, {
          headers: {
            Authorization: token,
          },
        });
        setOttList(res.data);
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
        <div className="container margin_30_40" id="wrapper">
          <div className="row">
            <div className="col-lg-12 ps-lg-5">
              <div className="main_title version_2">
                <span>
                  <em></em>
                </span>
                <h2>마이 페이지</h2>
              </div>
            </div>

            {isLoading ? (
              <>loading...</>
            ) : (
              <>
                {' '}
                <MyProfile myProfile={myProfile} col={6} />
                <div className="col-lg-6 ps-lg-6">
                  <div className="main_profile edit_section">
                    <div className="row" id="ott_logos">
                      <div className="col-lg-4 ps-lg-12 author" id="ott_hover">
                        <div className={ottList.netflix ? 'author_thumb' + ' ' + 'active' : 'author_thumb' + ' ' + 'disabled'}>
                          {' '}
                          <Button id="ott_logo">
                            <img src="https://velog.velcdn.com/images/joyoo1221/post/b807b710-c2e1-41a5-9175-b6607eac20d5/image.png" alt="" className="lazy" width="120" height="120" />
                          </Button>
                          <p className="ott_name" id="ott_name">
                            넷플릭스
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4 ps-lg-12 author" id="ott_hover">
                        <div className={ottList.tving ? 'author_thumb' + ' ' + 'active' : 'author_thumb' + ' ' + 'disabled'}>
                          {' '}
                          <Button id="ott_logo">
                            <img src="https://velog.velcdn.com/images/joyoo1221/post/dd975d66-1ecb-4ab1-9067-0b6050ecb399/image.png" alt="" className="lazy" width="120" height="120" />
                          </Button>
                          <p className="ott_name" id="ott_name">
                            티빙
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4 ps-lg-12 author" id="ott_hover">
                        <div className={ottList.wavve ? 'author_thumb' + ' ' + 'active' : 'author_thumb' + ' ' + 'disabled'}>
                          <Button id="ott_logo">
                            <img src="https://velog.velcdn.com/images/joyoo1221/post/ee7a9963-cfbc-4531-a6b0-db244cf5d447/image.png" alt="" className="lazy" width="120" height="120" />
                          </Button>
                          <p className="ott_name" id="ott_name">
                            웨이브
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*/row*/}
                </div>
              </>
            )}
          </div>
          <hr className="mt-4 mb-5"></hr>
          <p className="text-end">
            <Link to="/main/editProfile" className="btn_1">
              프로필 수정하기
            </Link>
          </p>
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

export default MyPage;
