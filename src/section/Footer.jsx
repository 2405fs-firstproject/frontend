import React from "react";
import { ReactComponent as KpassLogo } from "../assets/KpassLogo.svg";
import "../section/Footer.css";
export const Footer = () => {
  return (
    <div className="FooterUnit">
      <div className="FooterUnit_Logo">
        <KpassLogo width="75px" height="80px"></KpassLogo>
      </div>
      <div className="FooterUnit_Des">
        <div className="FooterUnit_Des_page">
          <a>서비스이용약관</a>
          <a>개인정보처리방침</a>
          <a>이메일무단수집거부</a>
          <a>품질오류신고</a>
        </div>
        <div className="FooterUnit_Des_adress">
          Copyright ⓒ Ministry of Land, Infrastructure and Transport. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};
