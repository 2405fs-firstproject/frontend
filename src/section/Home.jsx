import React from "react";
import SlideShow from "../pages/Main01/SlideShow";
import { Link, useNavigate } from "react-router-dom";
import "../pages/Main01/Main.css";
import Home2_1 from "../pages/main2/Home2_1";

export const Home = () => {
  // 수정 부분
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/signup");
  };

  return (
    <main>
      <div id="main01">
        <SlideShow />
        <div />
        <div className="login-box">
          <header className="login_title">
            <span className="login-title-text">
              혜택이 두루두루<br></br>행복이 차곡차곡<br></br>K-패스
            </span>
            <img
              className="login_img"
              src="https://korea-pass.kr/assets/images/main/main_01_02.svg"
              alt=""
            />
          </header>
          <form id="loginForm">
            <input type="hidden" id="result" name="result" value></input>
            <input type="hidden" id="socialFlag" name="socialCd"></input>
            <input type="hidden" id="socialId" name="socialId"></input>
            <input type="hidden" id="alUserId" name="alUserId"></input>
            <input type="hidden" id="userEmail" name="userEmail"></input>
            <label className="user_id">아이디</label>
            <div className="input-wrapper">
              <input
                type="text"
                id="user_id"
                placeholder="아이디를 입력해주세요."
                aria-invalid="false"
                aria-errormessage="id-error-msg"
                required
              ></input>
            </div>
            <label className="user_pwd">비밀번호</label>
            <div className="input-wrapper">
              <input
                type="password"
                id="user_pwd"
                placeholder="비밀번호를 입력해주세요."
                aria-invalid="false"
                aria-errormessage="password-error-msg"
                required
              ></input>
            </div>

            <button type="submit" className="btnLogin">
              로그인
            </button>

            <nav>
              <div className="login-util">
                <div className="login-find">
                  <span className="find-id">아이디 찾기</span>
                  <span className="bar">|</span>
                  <span className="find-pwd">비밀번호 찾기</span>
                </div>
                <div className="login-signup" onClick={handleLogin}>회원가입</div>
              </div>
              <div className="login-others">
                <a href="{()=>false}" id="naver_id_login_hidden">
                  <img
                    className="login_naver"
                    src="https://korea-pass.kr/assets/images/ico/naver.svg?ver=240220"
                    alt=""
                  />
                </a>
                <a href="{()=>false}" id="kakao_id_login_hidden">
                  <img
                    className="login_kakao"
                    src="https://korea-pass.kr/assets/images/ico/kakao.svg?ver=240220"
                    alt=""
                  />
                </a>
              </div>
            </nav>
          </form>
        </div>
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

