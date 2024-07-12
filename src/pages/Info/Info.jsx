import { Link } from "react-router-dom";
import React from "react";
import "./Info.css";

function Info() {
  return (
    <div>
      <header>
        <div className="header">
          <span className="header_home">
            <img
              src="https://korea-pass.kr/assets/images/ico/home.svg?ver=240220"
              alt=""
            />
          </span>
          <span className="header_text1">사업소개</span>
          <span className="header_arrow">
            <img
              src="https://korea-pass.kr/assets/images/ico/arrow_lnb.svg?ver=240220"
              alt=""
            />
          </span>
          <span className="header_text2">K-패스소개</span>
          <div className="header_text3">K-패스소개</div>
        </div>
      </header>

      <main>
        <div className="main_logo">
          <img src="https://korea-pass.kr/assets/images/logo.svg" alt="" />
        </div>
        <div className="main_intro_title">언제나, 어디서나 K-패스</div>
        <div className="main_intro">
          기본 조형인 사각형은 대중교통 대표 수단인 버스, 지하철과 지불수단인
          카드를 형상화하였으며 "K" 와 "스" 끝을 둥글린 라인으로 연결, 전국의
          지자체를 하나로 묶어 대한민국 대중교통의 활성화를 응원하는 의지를
          표현하였습니다.
        </div>
        {/* 슬라이드 구현해야됨 */}
        <div className="support">
          <span>
            <img
              className="support_img"
              src="https://korea-pass.kr/assets/images/intro/intro_01_01_01.webp?ver=240220"
              alt=""
            />
          </span>
          <span className="support_title">지원 대상</span>
          <div className="support_explain">
            K-패스 사업에 참여하는 지자체에 주민등록상 등록된 만 19세 이상 주민
          </div>
        </div>
        <div className="saving">
          <span>
            <img
              className="saving_img"
              src="https://korea-pass.kr/assets/images/intro/intro_01_01_02.webp?ver=240220"
              alt=""
            />
          </span>
          <span className="saving_title">적립 수단</span>
          <div className="saving_explain">
            전국 모든 대중교통 (버스, 지하철, 신분당선, 광역버스, GTX 등)
          </div>
          <div className="saving_explain2">
            • 다만, 시외(고속)버스, KTX, SRT, 공항버스 등 별도 발권받아 탑승하는
            교통수단은 포함되지 않습니다.
          </div>
        </div>
        <div className="standard">
          <span>
            <img
              className="standard_img"
              src="https://korea-pass.kr/assets/images/intro/intro_01_01_03.webp?ver=240220"
              alt=""
            />
          </span>
          <span className="standard_title">지급 기준</span>
          <div className="standard_explain1">
            월 15회 이상 대중교통 이용 시 최대 60회까지 지급
          </div>
          <div className="standard_explain2">
            • 가입 첫 달은 15회 미만 이용 시에도 지급됩니다.
          </div>
          <div className="standard_explain3">
            월 60회 초과 이용자는 이용금액이 높은 순으로 60회까지 지급
          </div>
          <div className="standard_explain4">
            월 대중교통 이용금액 20만원 초과 시 초과 이용금액에 대해서는 50%만
            적용하여 지급
          </div>
        </div>
        <div className="rate">
          <span>
            <img
              className="rate_img"
              src="https://korea-pass.kr/assets/images/intro/intro_01_01_04.webp?ver=240220"
              alt=""
            />
          </span>
          <span className="rate_title">적립률</span>
          <div className="rate_explain1">일반: 20% 적립</div>
          <div className="rate_explain2">청년: 만19 ~ 34세는 30% 적립</div>
          <div className="rate_explain3">저소득: 53% 적립</div>
          <div>
            <span className="rate_explain4-1">• 청년</span>
            <span> </span>
            <span className="rate_explain4-2">
              [청년기본법]에 따른 만19세 ~ 34세
            </span>
          </div>
          <div>
            <span className="rate_explain5-1">• 저소득층</span>
            <span> </span>
            <span className="rate_explain5-2">
              [기초생활보장법]에 따른 기초생활수급자 및 차상위계층
            </span>
          </div>
        </div>
        <div className="local">
          <span>
            <img
              className="lacal_img"
              src="https://korea-pass.kr/assets/images/intro/intro_01_01_05.webp?ver=240220"
              alt=""
            />
          </span>
          <span className="local_title">K-패스 참여 지역</span>
          <div className="local_explain">
            17개 시도 189개 시군구에서 K-패스 혜택을 드리고 있습니다.
          </div>
          <div>
            <img
              className="local_map"
              src="https://korea-pass.kr/assets/images/intro/map_southkorea.svg"
              alt=""
            />
          </div>
        </div>
        <div className="howto">
          <span>
            <img
              className="howto_img"
              src="https://korea-pass.kr/assets/images/intro/intro_01_01_06.svg?ver=240220"
              alt=""
            />
          </span>
          <span className="howto_title">이용방법</span>
          <div className="howto_explain1">1. 기존 알뜰교통카드 이용자</div>
          <div className="howto_explain2">
            알뜰교통카드 홈페이지 또는 앱에서 K-패스 회원전환 시 사용 중인
            알뜰교통카드와 계정 그대로 K-패스에서 이용 가능합니다
          </div>
          <div className="howto_explain3">
            4월 30일까지 회원전환을 하지 않는 경우 회원 전환일 또는 K-패스 신규
            가입일부터 혜택이 적용됩니다.
          </div>
          <div className="howto_explain4">
            • 알뜰교통카드 적립: 2024. 4. 30일 이용내역까지
          </div>
          <div className="howto_explain5">
            • 전환 기간: 2024. 6. 30일까지 홈페이지에서 (전환일부터 K-패스 환급
            적용)
          </div>
          <div className="howto_explain6">
            • K-패스 적용: 2024. 5. 1(수) 이용내역부터 (24. 5. 1(수) 이후 전환
            시 전환일부터)
          </div>
          <div className="howto_explain7">2. K-패스 카드 신규 가입</div>
          <div>
            <span>
              <img
                className="howto_img2"
                src="https://korea-pass.kr/assets/images/intro/intro_01_01_06_02_01.svg?ver=240220"
                alt=""
              />
            </span>
            <span className="howto_img2_explain2">
              K-패스 또는 알뜰교통카드 준비
            </span>
          </div>
          <div>
            <span>
              <img
                className="howto_img3"
                src="https://korea-pass.kr/assets/images/intro/intro_01_01_06_02_02.webp?ver=240220"
                alt=""
              />
            </span>
            <span className="howto_img3_explain3">K-패스 회원가입</span>
          </div>
          <div>
            <span>
              <img
                className="howto_img4"
                src="https://korea-pass.kr/assets/images/intro/intro_01_01_06_02_04.webp?ver=240220"
                alt=""
              />
            </span>
            <span className="howto_img4_explain4">
              K-패스 교통카드로 전국 대중교통 이용 시 이용금액의 일정 비율을
              적립 및 지급
            </span>
          </div>
        </div>
        <div className="video">
          <div className="video_title">홍보영상</div>
          <div className="video_link">
            <div>
              <a
                href="https://www.youtube.com/watch?v=WjdPACAtNGk"
                target="_blank"
              >
                <img
                  className="video_img"
                  src="https://korea-pass.kr/assets/images/temp/kpass_sample_240502.webp"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div className="step">
          <span>
            <img
              className="step_img"
              src="https://korea-pass.kr/assets/images/intro/intro_01_01_08.webp?ver=240220"
              alt=""
            />
          </span>
          <span className="step_title">회원가입 절차</span>
          <div className="step_explain1">
            1. 회원가입 화면 진입 (홈페이지 또는 앱)
          </div>
          <div className="step_explain2">
            2. 발급된 카드의 카드번호 15 ~ 16자리 입력 후, [유효성 체크] 클릭
          </div>
          <div className="step_explain3">
            3. 필수약관 모두 동의 시 본인명의 휴대폰으로 본인인증 진행 (PASS앱
            또는 문자인증)
          </div>
          <div className="step_explain4">
            4. 주민등록번호(외국인등록번호) 입력 후 주소지 검증 실시
          </div>
          <div className="step_explain4-1">
            거소사실여부 확인 불가 시 홈페이지에서 회원가입 후 1개월 이내
            발급받은 주민등록등(초)본/국내 거소 사실 증명서(외국인)를 MY &gt;
            나의지자체 메뉴에 등록해주세요.
          </div>
          <div className="step_explain5">
            5. 필수 회원정보 입력 후 가입 완료
          </div>
        </div>
        <div className="ask">
          <span>
            <img
              className="ask_img"
              src="https://korea-pass.kr/assets/images/intro/intro_01_01_09.webp?ver=240220"
              alt=""
            />
          </span>
          <span className="ask_title">문의하기</span>
          <div className="ask_column">
            <div className="ask_column_1">K-패스 정책 및 제도 문의</div>
            <div className="ask_column_2">이용 및 적립금 문의</div>
          </div>
          <div className="ask_explain_column">
            <div className="ask_explain_column1">
              • 한국교통안전공단 054-459-7441, 7442, 7446
            </div>
            <div className="ask_explain_column2">
              • K-패스 고객센터 031-427-4415
            </div>
            <div className="ask_explain_column3">
              • 국토교통부 대도시권광역교통위원회 044-201-5084, 5086
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Info;
