import React from "react";
import "../component/HomeNav.css";

export const HomeNavList = () => {
  return (
    <div className="NavUnits-02_Bottom">
      <div className="Menu-a2">
        <div className="title"> K-패스소개</div>
        <div className="title">
          지역별혜택소개
          <div className="subtitle"> *K패스-경기</div>
          <div className="subtitle"> *K패스-인천</div>
        </div>
      </div>
      <div className="Menu-a2">
        <div className="title"> 가입조건</div>
        <div className="title"> 적립금액안내</div>
        <div className="title"> 지급안내</div>
      </div>
      <div className="Menu-a2">
        <div className="title"> 카드소개</div>
        <div className="title">사용안내</div>
        <div className="subtitle"> *카드사별 지급방식</div>
        <div className="subtitle"> *모바일페이 이용안내</div>
        <div className="subtitle"> *카드변경방법</div>
        <div className="subtitle"> *카드사문의안내</div>
        <div className="title"> 카드이벤트</div>
      </div>
      <div className="Menu-a2">
        <div className="title"> 공지사항</div>
      </div>
      <div className="Menu-a2">
        <div className="title"> 문의하기</div>
        <div className="title"> 1:1문의</div>
        <div className="title"> 문의내역</div>
        <div className="title"> 자주묻는질문</div>
      </div>
    </div>
  );
};
