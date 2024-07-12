import React, { useState } from "react";
import "./Home2_2.css";
import Modal from "./Modal";

const cities = [
  {
    name: "강원도",
    regions: [
      "강릉시",
      "동해시",
      "삼척시",
      "양양군",
      "영월군",
      "원주시",
      "춘천시",
      "태백시",
      "홍천군",
      "횡성군",
    ],
  },
  {
    name: "경기도",
    regions: [
      "가평군",
      "고양시",
      "과천시",
      "광명시",
      "광주시",
      "구리시",
      "군포시",
      "김포시",
      "부천시",
      "성남시",
      "수원시",
      "시흥시",
      "안산시",
      "안성시",
      "안양시",
      "양주시",
      "양평군",
      "여주시",
      "연천군",
      "오산시",
      "용인시",
      "의왕시",
      "의정부시",
      "이천시",
      "파주시",
      "평택시",
      "포천시",
      "하남시",
      "화성시",
      "남양주시",
      "동두천시",
      "의정부시",
    ],
  },
  {
    name: "경상남도",
    regions: [
      "거제시",
      "거창군",
      "고성군",
      "김해시",
      "남해군",
      "밀양시",
      "사천시",
      "산청군",
      "양산시",
      "의령군",
      "진주시",
      "창녕군",
      "창원시",
      "통영시",
      "하동군",
      "함안군",
      "함양군",
      "합천군",
    ],
  },
  {
    name: "경상북도",
    regions: [
      "경산시",
      "경주시",
      "구미시",
      "김천시",
      "상주시",
      "안동시",
      "영주시",
      "영천시",
      "칠곡군",
      "포항시",
    ],
  },
  {
    name: "전라남도",
    regions: [
      "광양시",
      "나주시",
      "담양군",
      "목포시",
      "무안군",
      "순천시",
      "신안군",
      "여수시",
      "장성군",
      "해남군",
    ],
  },
  {
    name: "전라북도",
    regions: ["군산시", "남원시", "완주군", "익산시", "전주시", "정읍시"],
  },
  {
    name: "충청남도",
    regions: [
      "계룡시",
      "공주시",
      "금산군",
      "논산시",
      "당진시",
      "보령시",
      "부여군",
      "서산시",
      "서천군",
      "아산시",
      "예산군",
      "천안시",
      "청양군",
      "태안군",
      "홍성군",
    ],
  },
  {
    name: "충청북도",
    regions: [
      "괴산군",
      "단양군",
      "보은군",
      "영동군",
      "옥천군",
      "음성군",
      "제천시",
      "증평군",
      "진천군",
      "청주시",
      "충주시",
    ],
  },
  { name: "광주광역시", regions: ["광주광역시"] },
  { name: "대구광역시", regions: ["대구광역시"] },
  { name: "대전광역시", regions: ["대전광역시"] },
  { name: "부산광역시", regions: ["부산광역시"] },
  {
    name: "서울특별시",
    regions: [
      "종로구",
      "강남구",
      "강동구",
      "강북구",
      "강서구",
      "관악구",
      "광진구",
      "구로구",
      "금천구",
      "노원구",
      "도봉구",
      "동작구",
      "마포구",
      "서초구",
      "성동구",
      "성북구",
      "송파구",
      "양천구",
      "영등포구",
      "용산구",
      "은평구",
      "종로구",
      "중랑구",
      "동대문구",
      "서대문구",
    ],
  },
  { name: "울산광역시", regions: ["울산광역시"] },
  { name: "인천광역시", regions: ["인천광역시"] },
  { name: "세종특별자치시", regions: ["세종특별자치시"] },
  { name: "제주특별자치도", regions: ["제주시", "서귀포시"] },
];

const Home2_2 = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSelectCity = (city) => {
    setSelectedCity(city);
    setShowModal(false);
  };

  return (
    <div>
      <section className="home3">
        <header>
          <h2>
            전국에서 이용 가능한 K-패스
            <br />
            가입 조건만 확인하세요!
          </h2>
          <p>
            주민등록지상 주소지가 K-패스 사업에 참여하는 지자체 주민만 가입이
            가능하지만
            <br />
            가입만 하면 전국 어디에서나 이용할 수 있습니다.
          </p>
          <div className="home3-1">
            <form>
              <input
                type="text"
                id="search"
                name="search"
                placeholder="이용 가능 도시 선택"
                onClick={handleOpenModal}
                readOnly
              />
            </form>
          </div>
        </header>
        <img
          src="https://korea-pass.kr/assets/images/main/main_04.svg"
          alt="K-Pass"
        />
      </section>
      {selectedCity && (
        <section className="city-details">
          <header>
            <h3>{selectedCity.name}</h3>
            <p>{selectedCity.regions.length}개 지역</p>
          </header>
          <ul className="regions-list">
            {selectedCity.regions.map((region, index) => (
              <li key={index}>{region}</li>
            ))}
          </ul>
        </section>
      )}
      <Modal show={showModal} onClose={handleCloseModal}>
        <h3>이용 가능한 도시 선택</h3>
        <ul className="cities-list">
          {cities.map((city, index) => (
            <li key={index} onClick={() => handleSelectCity(city)}>
              {city.name}
            </li>
          ))}
        </ul>
      </Modal>
    </div>
  );
};

export default Home2_2;
