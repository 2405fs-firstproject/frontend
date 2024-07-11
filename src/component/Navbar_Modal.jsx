import React from "react";
import { Link } from "react-router-dom";

import "./Navbar_Modal.css";

export const Navbar_Modal = () => {
  return (
    <div className="Navbar_Modal">
      <div className="ListLine_container">
        <div className="ListLine">
          <div className="ListLine_group">
            <div className="ListLine_group_menu">
              <div className="MainIndex">
                <Link to="/KpassIntro">K-패스소개</Link>
              </div>
            </div>
            <div className="ListLine_group_menu">
              <div className="MainIndex">
                <Link to="/">지역별혜택소개</Link>
              </div>
              <div className="SubIndex">
                <Link to="/">• K패스-경기</Link>
              </div>
              <div className="SubIndex">
                <Link to="/">• K패스-인천</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="ListLine">
          <div className="ListLine_group">
            <div className="ListLine_group_menu">
              <div className="MainIndex">
                <Link to="/">가입조건</Link>
              </div>
            </div>
            <div className="ListLine_group_menu">
              <div className="MainIndex">
                <Link to="/">적립금액안내</Link>
              </div>
            </div>
            <div className="ListLine_group_menu">
              <div className="MainIndex">
                <Link to="/">지급안내</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="ListLine">
          <div className="ListLine_group">
            <div className="ListLine_group_menu">
              <div className="MainIndex">
                <Link to="/">카드소개</Link>
              </div>
            </div>
            <div className="ListLine_group_menu">
              <div className="MainIndex">
                <Link to="/">사용안내</Link>
              </div>
              <div className="ListLine_group_menuSub">
                <div className="SubIndex">
                  <Link to="/">• 카드사별 지급방식</Link>
                </div>
                <div className="SubIndex">
                  <Link to="/">• 모바일페이 이용안내</Link>
                </div>
                <div className="SubIndex">
                  <Link to="/">• 카드변경방법</Link>
                </div>
                <div className="SubIndex">
                  <Link to="/">• 카드사문의안내</Link>
                </div>
              </div>
            </div>
            <div className="ListLine_group_menu">
              <div className="MainIndex">
                <Link to="/">카드이벤트</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="ListLine">
          <div className="ListLine_group">
            <div className="ListLine_group_menu">
              <div className="MainIndex">
                <Link to="/">공지사항</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="ListLine">
          <div className="ListLine_group">
            <div className="ListLine_group_menu">
              <div className="MainIndex">
                <Link to="/ContactForm">문의하기</Link>
              </div>
            </div>
            <div className="ListLine_group_menu">
              <div className="MainIndex">
                <Link to="/Counsel">1:1문의</Link>
              </div>
            </div>
            <div className="ListLine_group_menu">
              <div className="MainIndex">
                <Link to="/">문의내역</Link>
              </div>
            </div>
            <div className="ListLine_group_menu">
              <div className="MainIndex">
                <Link to="/">자주묻는질문</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
