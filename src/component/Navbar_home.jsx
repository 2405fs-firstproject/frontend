import React from "react";
import { ReactComponent as KpassLogo } from "../assets/KpassLogo.svg";
import { ReactComponent as Kpass } from "../assets/Kpass.svg";
import { ReactComponent as Board } from "../assets/Board.svg";
import { ReactComponent as Card } from "../assets/Card.svg";
import { ReactComponent as Bell } from "../assets/Bell.svg";
import { ReactComponent as Question } from "../assets/Question.svg";
import { Link } from "react-router-dom";
import "./Navbar_home.css";

export const Navbar_home = () => {
  return (
    <div className="Navbar_body">
      <div className="Navbar_menu">
        <div className="Navbar-01">
          <Link to="/">
            <KpassLogo width="80px" height="80px" />
          </Link>
        </div>
        <div className="Navbar-02">
          <div className="Navbarbtn">
            <div className="BtnBox">
              <div className="BtnBox-a">
                <Kpass width="25px" height="25px"></Kpass>
                <div className="BtnBox-des">사업소개</div>
              </div>
            </div>
            <div className="BtnBox">
              <div className="BtnBox-a">
                <Board width="25px" height="25px" />
                <div className="BtnBox-des">이용안내</div>
              </div>
            </div>
            <div className="BtnBox">
              <div className="BtnBox-a">
                <Card width="25px" height="25px" />
                <div className="BtnBox-des">K-패스 카드</div>
              </div>
            </div>
            <div className="BtnBox">
              <div className="BtnBox-a">
                <Bell width="25px" height="25px" />
                <div className="BtnBox-des">공지사항</div>
              </div>
            </div>
            <div className="BtnBox">
              <div className="BtnBox-a">
                <Question width="25px" height="25px" />
                <div className="BtnBox-des">문의하기</div>
              </div>
            </div>
          </div>
        </div>
        <div className="Navbar-03">
          <div className="clickbox">
            <Link to="/login">로그인</Link>
          </div>
          <div className="clickbox">
            <Link to="/joinin">회원가입</Link>
          </div>
        </div>
      </div>
      <div className="Navbar_list">
        <div className="ListLine">
          <div className="ListLine_group">
            <Link to="/KpassIntro">K-패스소개</Link>
            <Link to="/">지역별혜택소개</Link>
            <Link to="/">K패스-경기</Link>
            <Link to="/">K패스-인천</Link>
          </div>
        </div>
        <div className="ListLine">
          <div className="ListLine_group">
            <Link to="/">가입조건</Link>
            <Link to="/">적립금액안내</Link>
            <Link to="/">지급안내</Link>
          </div>
        </div>
        <div className="ListLine">
          <div className="ListLine_group">
            <Link to="/">카드소개</Link>
            <Link to="/">사용안내</Link>
            <Link to="/">카드사별 지급방식</Link>
            <Link to="/">모바일페이 이용안내</Link>
            <Link to="/">카드변경방법</Link>
            <Link to="/">카드사문의안내</Link>
          </div>
        </div>
        <div className="ListLine">
          <div className="ListLine_group">
            <Link to="/">공지사항</Link>
          </div>
        </div>
        <div className="ListLine">
          <div className="ListLine_group">
            <Link to="/">문의하기</Link>
            <Link to="/">1:1문의</Link>
            <Link to="/">문의내역</Link>
            <Link to="/">자주묻는질문</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
