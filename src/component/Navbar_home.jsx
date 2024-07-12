import React, { useState, useEffect } from "react";
import { ReactComponent as KpassLogo } from "../assets/KpassLogo.svg";
import { ReactComponent as Kpass } from "../assets/Kpass.svg";
import { ReactComponent as Board } from "../assets/Board.svg";
import { ReactComponent as Card } from "../assets/Card.svg";
import { ReactComponent as Bell } from "../assets/Bell.svg";
import { ReactComponent as Question } from "../assets/Question.svg";
import { Navbar_Modal } from "../component/Navbar_Modal";

import { Link } from "react-router-dom";
import "./Navbar_home.css";

export const Navbar_home = () => {
  const [showModal, setShowModal] = useState(false);

  const handleBtnClick = () => {
    setShowModal(true); // 버튼 클릭 시 모달의 상태를 토글
  };
  const handleOutsideClick = (event) => {
    if (
      event.target.closest(".BtnBox") === null &&
      event.target.closest(".Navbar_Modal") === null
    ) {
      setShowModal(false); // BtnBox나 Navbar_Modal 외부를 클릭하면 showModal을 false로 설정
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="Navbar_body">
      <div className="Navbar_menu">
        <div className="Navbar-01">
          <Link to="/">
            <KpassLogo width="87px" height="80px" />
          </Link>
        </div>
        <div className="Navbar-02">
          <div className="Navbarbtn" on>
            <div className="BtnBox" onClick={handleBtnClick}>
              <div className="BtnBox-a">
                <Kpass width="25px" height="25px"></Kpass>
                <div className="BtnBox-des">사업소개</div>
              </div>
            </div>
            <div className="BtnBox" onClick={handleBtnClick}>
              <div className="BtnBox-a">
                <Board width="25px" height="25px" />
                <div className="BtnBox-des">이용안내</div>
              </div>
            </div>
            <div className="BtnBox" onClick={handleBtnClick}>
              <div className="BtnBox-a">
                <Card width="25px" height="25px" />
                <div className="BtnBox-des">K-패스 카드</div>
              </div>
            </div>
            <div className="BtnBox" onClick={handleBtnClick}>
              <div className="BtnBox-a">
                <Bell width="25px" height="25px" />
                <div className="BtnBox-des">공지사항</div>
              </div>
            </div>
            <div className="BtnBox" onClick={handleBtnClick}>
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
      {showModal && (
        <Navbar_Modal showModal={showModal} setShowModal={setShowModal} />
      )}
    </div>
  );
};
