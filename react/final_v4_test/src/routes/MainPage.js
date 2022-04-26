import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../components/Slider/Slider';
import {BASE_URL, tags} from '../config';
import axios from 'axios';
import { useState, useEffect } from 'react';

const MainPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        // BASE_URL = 'http://localhost:8080/api';
        // const res = await axios.get(`${BASE_URL}/movies?page=0&size=9&sort=detailsViewCount,desc`);
        const res = await axios.get(`${BASE_URL}/movies`, {
          params: {
            size: 9,
            sort: 'detailsViewCount,desc',
          },
        });

        setMovies(res.data.content);
        console.log(res.data.content);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
  return (
    <div>
      <main id="wrapper">
        {/* <section id="slider">
            <input type="radio" name="slider" id="s1" defaultChecked />
            <input type="radio" name="slider" id="s2" />
            <input type="radio" name="slider" id="s3" />
            <input type="radio" name="slider" id="s4" />
            <input type="radio" name="slider" id="s5" />
            <label htmlFor="s1" id="slide1">
              <img
                src="http://img2.sbs.co.kr/img/sbs_cms/WE/2022/03/22/7Oe1647911592739-640-360.jpg"
                height="100%"
                width="100%"
                alt=""
              />
            </label>
            <label htmlFor="s2" id="slide2">
              <img
                src="https://blog.kakaocdn.net/dn/Mu6Mi/btrtYT5zF58/XkNRCi69U7E9NTVObGMNv1/img.jpg"
                height="100%"
                width="100%"
                alt=""
              />
            </label>
            <label htmlFor="s3" id="slide3">
              <img
                src="https://w.namu.la/s/66b8f65f563a51479cb9f2de5e9837c0efe4cc4122d8d0c9d3008c496a2e6067ea12a4d8f86aac0196931427978300f7581afcdf0201dca2798eb528e6fdd57877a94c8d046c9a93f288be675d478318fe8796a67bf1d0a60e8a3e466a5a88b6"
                height="100%"
                width="100%"
                alt=""
              />
            </label>
            <label htmlFor="s4" id="slide4">
              <img
                src="https://w.namu.la/s/f9bc2e6b2ee45dbee1ea5917dbe46206738d4a7f15ec57671c8b82a9e013eecfabc1faa745996d5680ae452f54389488994feaf46cac271d2b85d075e3a1800f8db6e88f1f23afe9685a8199cb7f2921b68ac0b405c04c7e31fe736d0b9df3e4"
                height="100%"
                width="100%"
                alt=""
              />
            </label>
            <label htmlFor="s5" id="slide5">
              <img
                src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABR4L8G54T8GkBItYHSXueBQHEw8PG6qsmtXfEMn7FnFTvCAg9XPleIdx4mJcG74-oUaav-dnv_Tk0oaKZI34HTYfyHWnxdvWDTzI-9pKP9t-iOCwa9JfFx62i3G-lQ.jpg?r=748"
                height="100%"
                width="100%"
                alt=""
              />
            </label>
          </section> */}
        <section id="slider">
          <Slider />
        </section>
        {/*/carousel*/}
        <div className="bg_gray">
          <div className="container margin_120_90" style={{ paddingTop: '90px' }}>
            <div className="main_title version_2">
              <span>
                <em />
              </span>
              <h2>인기 콘텐츠</h2>
            </div>
            {/* /main_title */}
            <div className="row author_list">
              {movies.map((movie, i) => (
                <div className="col-lg-4 col-md-6" key={i}>
                  <Link to={`/main/detailPage/${movie.contentCode}`} className="author" style={{ padding: '15px 15px 15px 55px' }}>
                    <strong>{i + 1}</strong>
                    <div className="author_thumb veryfied">
                      {/* <i class="bi bi-check"></i> */}
                      <figure>
                        <img src={movie.contentImgVer} alt="" className="lazy" width={100} height={100} />
                      </figure>
                    </div>
                    <div style={{ marginRight: 'auto' }}>
                      <h6>{movie.contentName}</h6>
                      <span>{tags[movie.tagName]}</span>
                    </div>
                    <img src={movie.ottImg} width="20px" height="20px" alt={movie.ottName} style={{ objectFit: 'cover', marginRight: '7px', borderRadius: '3px' }} />
                    {/*<img src={movie.ageRating} width="20px" height="20px" style={{ objectFit: 'cover' }} />*/}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>{' '}
    </div>
  );
};

export default MainPage;
