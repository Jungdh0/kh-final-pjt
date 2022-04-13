import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

const TestPage = () => {
  
  return (
    <div>
      <div className="container">
        <section id="main" className="mx-auto my-5 py-5 px-3">
          <h3>당신의 영화와 드라마 취향을 찾아보세요</h3>
          <div className="col-lg-6 col-md-8 col-sm-10 mx-auto">
            <img src="https://img.icons8.com/color/344/popcorn.png" alt="" className="img-fluid" />
          </div>
          <p>
            간단한 테스트를 통해 취향에 맞는 콘텐츠를 알아 볼 수 있습니다!
            <br />
            아래 시작하기 버튼을 눌러 시작해 주세요.
          </p>
          <button className="default-btn mt-3" onClick="js:begin();">
            시작하기
          </button>
        </section>
        <section id="qna">
          <div className="status mx-auto mt-5">
            <div className="statusBar" />
          </div>
          <div className="qBox mx-auto my-5 py-3 text-center" />
          <div className="answerBox" />
        </section>
        <section id="result" className="mx-auto mt-5 py-5 px-3">
          <div id="resultImg" className="col-lg-6 col-md-8 col-sm-10 mx-auto" />
          <div className="px-3 mt-3 text-center">
            <h3 className="py-3">당신의 유형은?</h3>
            <span className="resultname highlight" />
            <div className="resultDesc col-lg-6 col-md-8 col-sm-10 mx-auto py-3" />
          </div>
          <div className="row" id="resultImgs">
            <div className="col-sm-4">
              <img src className="leftImage" alt="..." width="100%" />
            </div>
            <div className="col-sm-4">
              <img src className="centerImage" alt="..." width="100%" />
            </div>
            <div className="col-sm-4">
              <img src className="rightImage" alt="..." width="100%" />
            </div>
          </div>
          <div>
            <button className="default-btn mt-3" syonclick="location.href='login.html'">
              더 많은 추천 보러가기
            </button>
          </div>
          <div>
            <button type="button" className="btn btn-warning mt-3 mx-auto">
              <img src="img/KakaoTalk_logo.png" style={{ width: '30px' }} className="px-1" />
              공유하기
            </button>
          </div>
        </section>
      </div>
      <Helmet>
        <script src="src/sampledata/start.js"></script>
      </Helmet>
    </div>
  );
};

export default TestPage;
