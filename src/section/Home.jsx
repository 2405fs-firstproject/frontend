import React from "react";
import SlideShow from "../pages/Main01/SlideShow";
import { Link } from "react-router-dom";
import "../pages/Main01/Main.css";
import Home2_1 from "../pages/main2/Home2_1";

function Home() {
  return (
    <main>
      <div id="main01">
        <SlideShow />
      </div>
      <div id="main02">
        <div>
          <div className="text1_1">19세 이상 국민이면 누구나 이용 가능한</div>
          <div className="text1_2">교통비 할인카드를 소개합니다.</div>
          <div className="text2_1">오늘도 대중교통을 이용하고 계신 여러분,</div>
          <div className="text2_2">
            대중교통 이용 시마다 할인 받는 K-패스 알고 계신가요?
          </div>
          <Link to="/info" className="info_report">
            <span className="report">전체보기</span>
            <img
              className="info_arrow"
              src="https://korea-pass.kr/assets/images/ico/arrow_more.svg?ver=240220"
              alt=""
            />
          </Link>
        </div>
        <div className="kpass_img_wrapper">
          <img
            className="kpass_img"
            src="https://korea-pass.kr/assets/images/main/main_02.webp"
            alt=""
          />
        </div>
      </div>
      <Home2_1 />
    </main>
  );
}

export default Home;
