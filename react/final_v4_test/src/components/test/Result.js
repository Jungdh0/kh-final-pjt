import infoList from '../../sampledata/infoList'; //결과
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Result = ({ resultVisible, visible, hidden, select }) => {
  console.log(select);
  const result = select.indexOf(Math.max(...select));

  const point = select.indexOf(Math.max(...select));

  const resultsURL = 'img/result/results/';
  const leftURL = resultsURL + point + '-A.jpg';
  const centerURL = resultsURL + point + '-B.jpg';
  const rightURL = resultsURL + point + '-C.jpg';

  console.log(resultVisible);
  return (
    <>
      <section id="result" class="mx-auto mt-5 py-5 px-3" style={resultVisible ? visible : hidden}>
        <div id="resultImg" class="col-lg-6 col-md-8 col-sm-10 mx-auto"></div>
        <div class="px-3 mt-3 text-center">
          <h3 class="py-3">당신의 유형은?</h3>
          <span class="resultname highlight">{infoList[point].name}</span>
          <div class="resultDesc col-lg-6 col-md-8 col-sm-10 mx-auto py-3" style={{fontSize:'1rem'}}>{infoList[point].desc}</div>
        </div>
        <div class="row" id="resultImgs">
          <div class="col-sm-4">
            <img src={leftURL} class="leftImage" alt={point} width="100%" style={{ borderRadius: '3px' }} />
          </div>
          <div class="col-sm-4">
            <img src={centerURL} class="centerImage" alt={point} width="100%" style={{ borderRadius: '3px' }} />
          </div>
          <div class="col-sm-4">
            <img src={rightURL} class="rightImage" alt={point} width="100%" style={{ borderRadius: '3px' }} />
          </div>
        </div>
        <div style={{ marginTop: '30px' }}>
          <Link
            to="/login"
            class="default-btn mt-5
          "
          >
            더 많은 추천 보러가기
          </Link>
        </div>
        {/* <Link to="/login" type="button" class="btn btn-warning mt-3 mx-auto">
            {/* <img
              src="img/KakaoTalk_logo.png"
              style="width: 30px;"
              class="px-1"
            /> */}
        {/* 공유하기 */}
        {/* </Link> */}
      </section>
    </>
  );
};

export default Result;
