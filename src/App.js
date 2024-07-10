import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactMain from "./Contact/ContactMain.js";
import Counsel from "./Contact/Counsel";

function App() {
  // const [infosave, setInfosave] = useState([
  const [infosave] = useState([
    {
      id: "e1",
      type: "적립",
      title: "4월 알뜰교통카드 적립금은 어디서 확인하나요?",
      content:
        "4월 알뜰교통카드 적립금액은 알뜰교통카드 홈페이지(alcard.kr)에서 확인하실 수 있습니다.",
    },
    {
      id: "e2",
      type: "적립",
      title: "경기도민 혜택(K패스-경기)",
      content: "더 경기패스 대상자 - 주민등록상 주소지가 경기도인",
    },
    {
      id: "e3",
      type: "회원정보",
      title: "개명했어요 이름을 변경하고 싶습니다.",
      content: "MY > 내정보 메뉴에서 [회원정보수정] 버튼 클릭 후 변경",
    },
    {
      id: "e4",
      type: "회원정보",
      title: "휴대폰번호 변경하는 방법",
      content:
        "MY > 내정보 메뉴에서 [회원정보수정] 버튼 클릭 후 휴대폰 본인인증 진행",
    },
    {
      id: "e5",
      type: "카드",
      title: "카드 변경 방법 및 변경 시 지급 안내",
      content: "MY > 내카드 화면에서 [카드변경] 버튼 클릭",
    },
    {
      id: "e6",
      type: "이용방법",
      title: "K-패스는 출도착 버튼 안눌어도 되나요?",
      content: "출도착 버튼을 누르지 않습니다.",
    },
    {
      id: "e7",
      type: "지급",
      title: "IM원패스 실물카드 지급 방법",
      content:
        "원패스 실물카드 지급은 DGB유페이 홈페이지에서 신청할 수 있습니다.",
    },
    {
      id: "e8",
      type: "카드",
      title: "카드 태그시 오류 또는 잔액 부족으로 이용이 불가합니다.",
      content:
        "해당 문의는 이용중인 카드사로 문의해주시면 답변받으실 수 있습니다.",
    },
    {
      id: "e9",
      type: "이용방법",
      title: "외국인도 K-패스를 이용할 수 있나요?",
      content: "외국인 등록번호가 있는 외국인에 회원가입 가능합니다.",
    },
    {
      id: "e10",
      type: "지급",
      title: "지급일은 언제인가요?",
      content:
        "K-패스는 당월 적립금액을 익월 5영업일에 정산하여 카드사에 지급요청하게됩니다",
    },
  ]);

  // const getContactMain = (data) => {
  //   setInfosave([
  //     ...infosave,
  //     {
  //       id: Math.random().toString(),
  //       title: data.name,
  //       type: data.type,
  //       content: data.content,
  //     },
  //   ]);
  // };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactMain infosave={infosave} />} />
        <Route path="/counsel" element={<Counsel />} />
      </Routes>
    </Router>
  );
}

export default App;
