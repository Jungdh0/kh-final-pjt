import React from "react";
import { Link } from "react-router-dom";
import Slider from "../components/Slider/Slider";
import movies from "../sampledata/샘플.json";

const MainPage = () => {
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
          <div
            className="container margin_120_90"
            style={{ paddingTop: "90px" }}
          >
            <div className="main_title version_2">
              <span>
                <em />
              </span>
              <h2>당신을 위한 추천 콘텐츠</h2>
            </div>
            {/* /main_title */}
            <div className="row author_list">
              {movies.map((movie, i) => {
                if (i > 8) {
                  return;
                }
                return (
                  <div className="col-lg-4 col-md-6" key={i}>
                    <Link
                      to={`/main/detailPage/${movie.content_code}`}
                      className="author"
                      style={{ padding: "15px 15px 15px 55px" }}
                    >
                      <strong>{i + 1}</strong>
                      <div className="author_thumb veryfied">
                        {/* <i class="bi bi-check"></i> */}
                        <figure>
                          <img
                            src={movie.content_img_ver}
                            alt=""
                            className="lazy"
                            width={100}
                            height={100}
                          />
                        </figure>
                      </div>
                      <div>
                        <h6>{movie.content_name}</h6>
                        <figure>
                          <img src={movie.ott_code} width="20px" alt="" />
                        </figure>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>{" "}
    </div>
  );
};

export default MainPage;
