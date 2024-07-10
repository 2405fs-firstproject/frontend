import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ContactMain.css";
import Modal from "react-modal";
import questionImage from "./question.png";
import phoneImage from "./phone.png";

const ContactMain = ({ infosave = [] }) => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState("적립");
  const [isOpen, setIsOpen] = useState(false);

  const goToCounsel = () => {
    navigate("/counsel");
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  //데이터 필터링
  const filteredInfos = infosave.filter((info) => info.type === selectedType);

  return (
    <>
      <div className="main-name"> 문의하기 </div>
      <div className="Counsel-btn">
        <button className="btn1" onClick={goToCounsel}>
          1:1 문의하기
          <img src={questionImage} alt="" className="btn-icon1" />
        </button>
        <button className="btn2" onClick={openModal}>
          <span className="btn2-content">
            전화문의 <br></br>
            <span className="small-text">
              평일 9시 ~ 18시 / 휴게시간 12시 ~ 13시
            </span>
          </span>
          <img src={phoneImage} alt="" className="btn-icon2" />
        </button>
        <Modal
          className="phone-info"
          isOpen={isOpen}
          onRequestClose={closeModal}
        >
          <h2>전화문의안내</h2>
          <div className="info-1">
            <div className="info-1-1">K-패스 고객센터 연결</div>
            <div className="info-1-2">앱 이용방법 문의 : 031-427-4415</div>
          </div>
          <div className="info-1">
            <div className="info-1-1">한국교통안전공단연결</div>
            <div className="info-1-2">
              K-패스 정책 및 제도 문의 : 054-459-7441
            </div>
          </div>
          <div className="info-1">
            <div className="info-1-1">K패스-경기 연결</div>
            <div className="info-1-2">
              THE 경기패스 정책 및 제도 문의 : 031-120
            </div>
          </div>
          <div className="info-1">
            <div className="info-1-1">K패스-인천 연결</div>
            <div className="info-1-2">
              인천 I-패스 정책 및 제도 문의 : 032-120
            </div>
          </div>
          <button onClick={closeModal}>닫기</button>
        </Modal>
      </div>
      <div className="type-choice">문의 유형 선택</div>
      <div className="counsel-type">
        <select onChange={handleTypeChange} value={selectedType}>
          <option value="적립">적립</option>
          <option value="회원정보">회원정보</option>
          <option value="지급">지급</option>
          <option value="카드">카드</option>
          <option value="이용방법">이용방법</option>
        </select>
      </div>
      <div className="type-example">자주 묻는 질문</div>
      <div className="info-list">
        {filteredInfos.map((info) => (
          <div key={info.id} className="info-item">
            <div id="info-type" type={info.type}>
              {info.type}
            </div>
            <div id="info-title">{info.title}</div>
            <div id="infso-content">{info.content}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ContactMain;
