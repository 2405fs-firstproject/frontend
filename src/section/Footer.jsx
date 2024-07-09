import { Link } from "react-router-dom";
import { ReactComponent as KpassLogo } from "../assets/KpassLogo.svg";
import "../section/Footer.css";

export const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_container_Logo">
        <KpassLogo width="75px" height="80px"></KpassLogo>
      </div>
      <div className="footer_container_Navbar">
        <div className="footer_container_Navbar_link">
          <Link to="/service">서비스이용약관</Link>

          <Link to="/private" style={{ color: "black" }}>
            개인정보처리방침
          </Link>
          <Link to="/email">이메일무단수집거부</Link>
          <Link to="https://data.molit.go.kr/systemQuality/write?system_id=S0073">품질오류신고</Link>
        </div>
        <div className="footer_container_Navbar_des">
          Copyright ⓒ Ministry of Land, Infrastructure and Transport. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};
