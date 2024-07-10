import "./Counsel.css";

const counsel = () => {
  return (
    <>
      <div className="main"> 1:1 문의하기 </div>
      <div className="wrapper">
        <div className="contact-type-select"> 문의 유형 선택 </div>
        <div className="contact-type">
          <label> 문의 유형 </label>
          <div className="save">
            <select type="text">
              <option value="적립">적립</option>
              <option value="회원정보">회원정보</option>
              <option value="지급">지급</option>
              <option value="카드">카드</option>
              <option value="이용문의">이용문의</option>
              <option value="오류및기타">오류 및 기타</option>
              <option value="개선요청">개선요청</option>
            </select>
          </div>
          <div className="save-type">
            <select type="text">
              <option value="적립금액">적립 금액</option>
              <option value="환승">환승</option>
              <option value="적립기준">적립 기준</option>
              <option value="지자체추가적립">지자체 추가 적립</option>
            </select>
          </div>
        </div>
        <div className="terms-name">비회원 1:1문의하기 이용약관</div>
        <div className="terms">
          개인정보 수집 및 이용약관 <br></br> K-패스는 비회원 문의를 처리하기
          위해 다음과 같이 개인정보를 수집 및 이용하며, 이용자의 개인정보를
          안전하게 취급하는데 최선을 다하고 있습니다. <br></br>
          <br></br>
          [개인정보의 수집 및 이용 목적] <br></br>
          문의·요청·불편사항 확인 및 처리 상담 제공 <br></br>
          <br></br>
          [수집 항목] <br></br> 이름, 휴대번호, 비밀번호 <br></br> <br></br>
          [보유 기간] 문의 일로부터 1년간 보관
        </div>
        <div className="agree-box">
          <input type="checkbox" />
          개인정보 수집 및 이용 동의
        </div>
        <div className="information-input">문의자 정보 입력</div>
        <div className="inforamtion-input name">
          이름 <font color="red">*</font>
        </div>
        <input className="a" type="text"></input>
        <div className="inforamtion-input phone">
          휴대전화 <font color="red">*</font>
        </div>
        <input type="text" placeholder=" - 없이 입력해주세요 "></input>
        <div className="inforamtion-input password">
          비밀번호 <font color="red">*</font>
        </div>
        <input
          type="text"
          placeholder=" 영문+숫자+특수문자 8~16자리로 입력해주세요 "
        ></input>
        <div className="inforamtion-input memo">문의작성</div>
        <div className="title">
          제목 <font color="red">*</font>
        </div>
        <input
          type="text"
          placeholder="정확하게 등록하시면 빠른 처리에 도움이 됩니다."
        ></input>
        <div className="inforamtion-input content">
          내용 <font color="red">*</font>
        </div>
        <textarea class="styled-textarea">문의내용 :</textarea>

        <div class="line"></div>
        <button className="register-button" type="submit">
          등록
        </button>
      </div>
    </>
  );
};

export default counsel;
