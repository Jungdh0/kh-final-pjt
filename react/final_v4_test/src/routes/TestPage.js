import React from 'react';
import qnaList from '../sampledata/qnsList';
import infoList from '../sampledata/infoList';
import ReactDOM from 'react-dom';

const TestPage = () => {
  const main = document.querySelector('#main');
  const qna = document.querySelector('#qna');
  const result = document.querySelector('#result');
  const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //태그수
  const endPoint = 13; //문제
  function calResult() {
    console.log(select);
    var result = select.indexOf(Math.max(...select));
    return result;
  }

  function setResult() {
    let point = calResult();

    const resultName = document.querySelector('.resultname');
    resultName.innerHTML = infoList[point].name;

    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector('#resultImg');
    var imgURL = 'img/result/image-' + point + '.jpg';
    resultImg.src = imgURL;
    resultImg.alt = point;
    resultImg.classList.add('img-fluid');
    imgDiv.appendChild(resultImg);

    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = infoList[point].desc;

    var resultsURL = 'img/result/results/';
    let leftURL = resultsURL + point + '-A.jpg';
    let centerURL = resultsURL + point + '-B.jpg';
    let rightURL = resultsURL + point + '-C.jpg';

    let leftImage = document.querySelector('.leftImage');
    let centerImage = document.querySelector('.centerImage');
    let rightImage = document.querySelector('.rightImage');
    leftImage.src = leftURL;
    centerImage.src = centerURL;
    rightImage.src = rightURL;

    // left.src = resultsURL + point + '-A.jpg';
    // center.src = resultsURL + point + '-B.jpg';
    // right.src = resultsURL + point + '-C.jpg';
  }

  function goResult() {
    qna.style.WebkitAnimation = 'fadeOut 1s';
    qna.style.animation = 'fadeOut 1s';
    setTimeout(() => {
      result.style.WebkitAnimation = 'fadeIn 1s';
      result.style.animation = 'fadeIn 1s';
      setTimeout(() => {
        qna.style.display = 'none';
        result.style.display = 'block';
      }, 450);
    });
    setResult();
  }

  function addAnswer(answerText, qIdx, idx) {
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');
    answer.classList.add('answerList');
    answer.classList.add('my-3');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');
    answer.classList.add('fadeIn');

    a.appendChild(answer);
    answer.innerHTML = answerText;

    answer.addEventListener(
      'click',
      function () {
        var children = document.querySelectorAll('.answerList');
        for (let i = 0; i < children.length; i++) {
          children[i].disabled = true;
          children[i].style.WebkitAnimation = 'fadeOut 0.5s';
          children[i].style.animation = 'fadeOut 0.5s';
        }
        setTimeout(() => {
          var target = qnaList[qIdx].a[idx].type;
          for (let i = 0; i < target.length; i++) {
            select[target[i]] += 1;
          }

          for (let i = 0; i < children.length; i++) {
            children[i].style.display = 'none';
          }
          goNext(++qIdx);
        }, 450);
      },
      false
    );
  }

  function goNext(qIdx) {
    if (qIdx === endPoint) {
      goResult();
      return;
    }

    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].q;
    for (let i in qnaList[qIdx].a) {
      addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
    }
    var status = document.querySelector('.statusBar');
    status.style.width = (100 / endPoint) * (qIdx + 1) + '%';
  }

  // function begin() {
  //   main.style.WebkitAnimation = 'fadeOut 1s';
  //   main.style.animation = 'fadeOut 1s';
  //   setTimeout(() => {
  //     qna.style.WebkitAnimation = 'fadeIn 1s';
  //     qna.style.animation = 'fadeIn 1s';
  //     setTimeout(() => {
  //       main.style.display = 'none';
  //       qna.style.display = 'block';
  //     }, 450);
  //     let qIdx = 0;
  //     goNext(qIdx);
  //   }, 450);
  // }

  return (
    <div>
      <div className="container" id="wrapper">
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
          <button
            className="default-btn mt-3"
            onClick={() => {
              main.style.WebkitAnimation = 'fadeOut 1s';
              main.style.animation = 'fadeOut 1s';
              setTimeout(() => {
                qna.style.WebkitAnimation = 'fadeIn 1s';
                qna.style.animation = 'fadeIn 1s';
                setTimeout(() => {
                  main.style.display = 'none';
                  qna.style.display = 'block';
                }, 450);
                let qIdx = 0;
                goNext(qIdx);
              }, 450);
            }}
          >
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
            {/* <button type="button" className="btn btn-warning mt-3 mx-auto">
              <img src="img/KakaoTalk_logo.png" style={{ width: '30px' }} className="px-1" />
              공유하기
            </button> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TestPage;
