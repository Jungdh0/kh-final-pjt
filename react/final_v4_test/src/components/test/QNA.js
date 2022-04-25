import React, { useState } from 'react';

import qnaList from '../../sampledata/qnsList'; //문제
import Loading from '../Loading';
import Result from './Result';

const QNA = ({ visible, hidden, qnaVisible, setQnaVisible, setResultVisible, setSelect, select }) => {
  const endPoint = qnaList.length - 1;
  const [statusBarWidth, setStatusBarWidth] = useState(0);
  const [qIdx, setQIdx] = useState(0); //문제 인덱스

  const goNext = (type) => {
    setStatusBarWidth((100 / endPoint) * (qIdx + 1)); //스테이터스바 길이 늘리기

    if (qIdx === endPoint) {
      //마지막 문제까지 풀면 끝내셈
      console.log('끝남!');
      setQnaVisible(false);
      setResultVisible(true);

      return;
    }

    const temp = select;

    type.forEach((v) => {
      temp[v] += 1;
    });

    setSelect(temp);
    setQIdx(qIdx + 1);
  };

  return (
    <section id="qna" style={qnaVisible ? visible : hidden}>
      <div class="status mx-auto mt-5">
        <div class="statusBar" style={{ width: statusBarWidth + '%' }}></div>
      </div>
      <Loading />
      <div class="qBox mx-auto my-5 py-3 text-center">
        {/* 여기에 문제출력 */}
        {qnaList[qIdx].q}
      </div>
      <div class="answerBox">
        {/* 여기에 답변출력 */}

        {qnaList[qIdx].a.map((v) => (
          <button
            class="answerList my-3 py-3 mx-auto fadeIn"
            onClick={() => {
              goNext(v.type);
            }}
          >
            {v.answer}
          </button>
        ))}
      </div>
    </section>
  );
};

export default QNA;
