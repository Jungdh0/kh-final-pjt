import React from "react";
import qnaList from "../sampledata/qnsList";
import infoList from "../sampledata/infoList";

import QNA from "../components/test/QNA";
import Result from "../components/test/Result";

import { useEffect, useState } from "react";

import { layoutState } from "../state";
import { useRecoilState } from "recoil";

const visible = {
  display: "block",
  animaiton: "FadeIn 0.5s",
};

const hidden = {
  display: "none",
  animaiton: "fadeOut 0.5s",
};

const TestPageR = () => {
  const [layoutVisible, setLayoutVisible] = useRecoilState(layoutState);
  setLayoutVisible(false);
  const [mainVisible, setMainVisible] = useState(true);
  const [qnaVisible, setQnaVisible] = useState(false);
  const [resultVisible, setResultVisible] = useState(false);
  const [select, setSelect] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  useEffect(() => {
    return () => {
      setLayoutVisible(true);
    };
  }, []);

  return (
    <div className="container" id="wrapper">
      <section
        id="main"
        class="mx-auto my-5 py-5 px-3"
        style={mainVisible ? visible : hidden}
      >
        <h3>당신의 영화와 드라마 취향을 찾아보세요</h3>
        <div class="col-lg-6 col-md-8 col-sm-10 mx-auto">
          <img src="/img/logo/big_pop.png" alt="" class="img-fluid" />
        </div>
        <p>
          간단한 테스트를 통해 취향에 맞는 콘텐츠를 알아 볼 수 있습니다!
          <br />
          아래 시작하기 버튼을 눌러 시작해 주세요.
        </p>
        <button
          class="default-btn mt-3"
          onClick={() => {
            setMainVisible(false);
            setQnaVisible(true);
          }}
        >
          시작하기
        </button>
      </section>
      <QNA
        visible={visible}
        hidden={hidden}
        qnaVisible={qnaVisible}
        setQnaVisible={setQnaVisible}
        setResultVisible={setResultVisible}
        select={select}
        setSelect={setSelect}
      />
      <Result
        visible={visible}
        hidden={hidden}
        resultVisible={resultVisible}
        setResultVisible={setResultVisible}
        select={select}
      />
    </div>
  );
};

export default TestPageR;
