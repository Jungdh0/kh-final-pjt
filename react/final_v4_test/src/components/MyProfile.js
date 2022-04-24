import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const token = window.localStorage.getItem('token');

const MyProfile = ({ myProfile, col }) => {
  const navigate = useNavigate();

  const { kakaoProfileImg, kakaoEmail, kakaoNickname } = myProfile;

  return (
    <div className={`col-lg-${col}`}>
      <div className="main_profile edit_section">
        <div className="author">
          <div className="author_thumb veryfied">
            <figure>
              <img src={kakaoProfileImg} alt="profile_img" className="lazy" width="105" height="105" />
            </figure>
          </div>
        </div>
        <h1>{kakaoNickname}</h1>
        <ul>
          <li>
            <i className="bi bi-person"></i>이메일 : <span>{kakaoEmail}</span>
          </li>

          <li
            style={{ cursor: 'pointer' }}
            onClick={(e) => {
              window.localStorage.removeItem('token');
              navigate('/');
            }}
          >
            <i className="bi bi-box-arrow-right"></i>
            로그아웃
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
