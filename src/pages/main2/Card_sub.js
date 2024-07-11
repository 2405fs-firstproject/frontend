import React from "react";
import "./Card_sub.css"; // Make sure to create this CSS file and add the styles

const K_Pass_Card = () => {
  return (
    <div className="card_sub_all">
      <section className="headers">
        <div className="header_sub">
          <a href="/">
            <img
              src="https://korea-pass.kr/assets/images/ico/home.svg?ver=240220"
              alt="home"
            />
          </a>
          <div>K-패스 카드</div>
          <div> 사용안내</div>
          <img
            src="https://korea-pass.kr/assets/images/ico/arrow_lnb.svg?ver=240220"
            alt="arrow"
          />
          <span className="selectpage">카드사별 지급방식</span>
        </div>
        <h2>카드사별 지급방식</h2>
      </section>
      <section className="card_sub">
        <section className="card_sub_1">
          <div className="gift_div">
            <h3>적립금을 지급하는 기준</h3>
            <img
              className="gift"
              src="https://korea-pass.kr/assets/images/common/gift_blue.webp?ver=240220"
              alt="gift"
            />
          </div>
          <ul>
            <li>
              월 15회 이상 이용 시 최대 60회까지 적립금액이 높은 순으로 지급
            </li>
            <li>나의 지자체가 주소지가 사업대상 지역인 경우 지급</li>
          </ul>
          <div className="guide">
            <h3>적립금이 지급되지 않는 경우</h3>
            <ul>
              <li>사업대상이 지역이 아닌 곳으로 거주지가 변경된 경우</li>
              <li>주소지검증 시행 기간 동안 재검증 하지 않을 경우</li>
            </ul>
          </div>
        </section>

        <section className="card_sub_2">
          <div className="gold_div">
            <h3>지급금액을 카드사로 보내는 기간</h3>
            <img
              className="gold"
              src="https://korea-pass.kr/assets/images/common/gold.webp?ver=240220"
              alt="gold"
            />
          </div>
          <p>적립 월의 익월 5영업일 카드사로 지급 요청됩니다.</p>
        </section>

        <section className="card_sub_3">
          <div className="calendar_div">
            <h3>카드사별 지급일과 지급방식</h3>
            <img
              className="calendar"
              src="https://korea-pass.kr/assets/images/common/calendar.webp?ver=240220"
              alt="calendar"
            />
          </div>
          <h4>7-9영업일 이내 지급하는 카드사</h4>
          <div className="card_list">
            <div className="card_item">
              <img
                src="https://korea-pass.kr/assets/images/card/ico_SH.svg?ver=240220"
                alt="신한카드"
              />
              <div>
                <h4>신한카드</h4>
                <p>
                  7영업일 이후 (신용) 결제대금에서 차감, 결제대금이 없는 경우
                  계좌로 입금 (체크)계좌로 입금됩니다.
                </p>
              </div>
            </div>
            <div className="card_item">
              <img
                src="https://korea-pass.kr/assets/images/card/ico_WB.svg?ver=240220"
                alt="우리카드"
              />
              <div>
                <h4>우리카드</h4>
                <p>
                  7-9영업일 이후 결제대금에서 차감됩니다. 결제대금이 없는 경우
                  계좌로 입금됩니다.
                </p>
              </div>
            </div>
            <div className="card_item">
              <img
                src="https://korea-pass.kr/assets/images/card/ico_SS.svg?ver=240220"
                alt="삼성카드"
              />
              <div>
                <h4>삼성카드</h4>
                <p>7-8영업일에 계좌로 입금됩니다.</p>
              </div>
            </div>
            <div className="card_item">
              <img
                src="https://korea-pass.kr/assets/images/card/ico_DG.webp?ver=240220"
                alt="iM유페이"
              />
              <div>
                <h4>iM유페이</h4>
                <p>
                  모바일 카드는 익월 7영업일에 원마일리지로, 실물 카드는
                  iM유페이 홈페이지에서 별도의 지급 신청 후 지급됩니다.
                </p>
              </div>
            </div>
            <div className="card_item">
              <img
                src="https://korea-pass.kr/assets/images/card/ico_HANA.svg?ver=240220"
                alt="하나카드"
              />
              <div>
                <h4>하나카드</h4>
                <p>8영업일에 계좌로 입금됩니다.</p>
              </div>
            </div>
          </div>
          <h4>정해진 날짜에 지급하는 카드사</h4>
          <div className="card_list">
            <div className="card_item">
              <img
                src="https://korea-pass.kr/assets/images/card/ico_KB.svg?ver=240220"
                alt="국민카드"
              />
              <div>
                <h4>국민카드</h4>
                <p>적립 월의 익월 마지막 영업일에 내 계좌로 입금됩니다.</p>
              </div>
            </div>
            <div className="card_item">
              <img
                src="https://korea-pass.kr/assets/images/card/ico_NH.svg?ver=240220"
                alt="NH농협카드"
              />
              <div>
                <h4>NH농협카드</h4>
                <p>적립 월의 익월 15일 내 계좌로 입금됩니다.</p>
              </div>
            </div>
            <div className="card_item">
              <img
                src="https://korea-pass.kr/assets/images/card/ico_KBK.svg?ver=240220"
                alt="케이뱅크"
              />
              <div>
                <h4>케이뱅크</h4>
                <p>
                  적립 월의 익월 15일(휴일일 경우 다음 영업일)에 계좌로
                  입금됩니다.
                </p>
              </div>
            </div>
            <div className="card_item">
              <img
                src="https://korea-pass.kr/assets/images/card/ico_EB.svg?ver=240220"
                alt="모바일이즐"
              />
              <div>
                <h4>모바일이즐</h4>
                <p>
                  적립 월의 익월 20-27일 오전 10시까지 모바일이즐 앱의
                  선물함으로 지급됩니다.
                </p>
              </div>
            </div>
            <div className="card_item">
              <img
                src="https://korea-pass.kr/assets/images/card/ico_EB.svg?ver=240220"
                alt="이즐(실물카드)"
              />
              <div>
                <h4>이즐(실물카드)</h4>
                <p>
                  적립 월의 익월 20-27일 오전 10시까지 이즐충전소 앱의 선물로
                  지급됩니다.
                </p>
              </div>
            </div>
            <div className="card_item">
              <img
                src="https://korea-pass.kr/assets/images/card/ico_kakaopay.svg?ver=240220"
                alt="이즐+카카오페이"
              />
              <div>
                <h4>이즐+카카오페이</h4>
                <p>
                  적립 월의 익월 20-27일 오전 10시까지 카카오페이 앱의
                  쿠폰함으로 지급됩니다.
                </p>
              </div>
            </div>
            <div className="card_item">
              <img
                src="https://korea-pass.kr/assets/images/card/ico_TM.webp?ver=240220"
                alt="티머니"
              />
              <div>
                <h4>티머니</h4>
                <p>전월 실적을 기준으로 적립 월의 익월 16일 지급됩니다.</p>
              </div>
            </div>
          </div>
          <h4>내 결제일이 실제 지급일인 카드사</h4>
          <div className="card_list">
            <div className="card_item">
              <img
                src="https://korea-pass.kr/assets/images/card/ico_HANA.svg?ver=240220"
                alt="BC하나카드"
              />
              <div>
                <h4>BC하나카드</h4>
                <p>
                  결제대금에서 차감됩니다. 결제대금이 없는 경우 계좌로
                  입금됩니다.
                </p>
              </div>
            </div>
            <div className="card_item">
              <img
                src="https://korea-pass.kr/assets/images/card/ico_BR.svg?ver=240220"
                alt="BC바로카드"
              />
              <div>
                <h4>BC바로카드</h4>
                <p>
                  결제대금에서 차감됩니다. 결제대금이 없는 경우 계좌로
                  입금됩니다.
                </p>
              </div>
            </div>
            <div className="card_item">
              <img
                src="https://korea-pass.kr/assets/images/card/ico_IBK.svg?ver=240220"
                alt="IBK기업은행"
              />
              <div>
                <h4>IBK기업은행</h4>
                <p>
                  결제대금에서 차감됩니다. 결제대금이 없는 경우 계좌로
                  입금됩니다.
                </p>
              </div>
            </div>
            <div className="card_item">
              <img
                src="https://korea-pass.kr/assets/images/card/ico_HD.svg?ver=240220"
                alt="현대카드"
              />
              <div>
                <h4>현대카드</h4>
                <p>
                  환급금은 결제일에 차감되며, 남은 K-패스 환급금이 있다면 연결된
                  계좌로 결제일 다음 날 입금됩니다.
                </p>
              </div>
            </div>
            <div className="card_item">
              <img
                src="https://korea-pass.kr/assets/images/card/ico_GJ.svg?ver=240220"
                alt="광주은행"
              />
              <div>
                <h4>광주은행</h4>
                <p>
                  결제대금에서 차감됩니다. 결제대금이 없는 경우 계좌로
                  입금됩니다.
                </p>
              </div>
            </div>
          </div>
          <div className="usage_guide">
            <h4>이용안내</h4>
            <p>
              신용공여기간이란? 고객이 카드로 물건을 사거나, 현금서비스를 받을
              날로부터 대금을 결제하거나 돈을 갚는 날까지의 기간입니다.
            </p>
            <p>
              하나카드의 경우 신용공여기간에 따라 마일리지 지급일이 다음다음
              달(2달뒤) 지급될 수 있습니다.
            </p>
            <p>
              신용카드 이용금액에서 차감 후 남은 적립금액은 계좌로 입금됩니다.
            </p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default K_Pass_Card;
