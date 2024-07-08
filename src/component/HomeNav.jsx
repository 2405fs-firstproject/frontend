import { ReactComponent as KpassLogo } from "../assets/KpassLogo.svg";
import "../component/HomeNav.css";
import { HomeNavList } from "../component/HomeNavList";
import React, { useState, useEffect, useRef } from "react";

export const HomeNav = () => {
  const [showNavList, setShowNavList] = useState(false);
  const navButtonRef = useRef(null);

  const handleClickOutside = (event) => {
    if (navButtonRef.current && !navButtonRef.current.contains(event.target)) {
      setShowNavList(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="NavUnits">
      <div className="NavUnits-01">
        <KpassLogo width="84px"></KpassLogo>
      </div>
      <div className="NavUnits-02">
        <div className="NavUnits-02_Top">
          <div className="Menu-a" ref={navButtonRef} onClick={() => setShowNavList(!showNavList)}>
            [̲̅k] 사업소개
          </div>
          <div className="Menu-a" ref={navButtonRef} onClick={() => setShowNavList(!showNavList)}>
            🀫 이용안내
          </div>
          <div className="Menu-a" ref={navButtonRef} onClick={() => setShowNavList(!showNavList)}>
            ⌨ K-패스 카드
          </div>
          <div className="Menu-a" ref={navButtonRef} onClick={() => setShowNavList(!showNavList)}>
            🕭 공지사항
          </div>
          <div className="Menu-a" ref={navButtonRef} onClick={() => setShowNavList(!showNavList)}>
            ✎ 문의하기
          </div>
        </div>
        {showNavList && <HomeNavList />}
      </div>
      <div className="NavUnits-03">
        <div className="Menu-b">
          <span className="GrayLine">로그인</span>
        </div>
        <div className="Menu-b">회원가입</div>
      </div>
      <div className="NavUnitBottom"></div>
    </div>
  );
};
