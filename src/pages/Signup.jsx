import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [idValid, setIdValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  const handleId = (e) => {
    setId(e.target.value);
    const regex = /^[a-z\d]{5,10}$/;

    if (regex.test(id)) {
      setIdValid(true);
    } else {
      setIdValid(false);
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    const regex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;

    if (regex.test(password)) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value === password) {
      setConfirmPasswordValid(true);
    } else {
      setConfirmPasswordValid(false);
    }
  };

  const onClickConfirmButton = () => {
    if (idValid && passwordValid && confirmPasswordValid) {
      alert("회원가입에 성공했습니다.");
    } else {
      alert("아이디 또는 비밀번호가 유효하지 않습니다.");
    }
  };

  const handleSignup = () => {
    navigate("/login");
  };

  return (
    <div className="headerWrap">
      <div className="headerSignup">회원가입</div>
      <div className="signupPage">
        <div className="titleWrap">
          혜택이 두루두루
          <br />
          행복이 차곡차곡
          <br />
          K-패스
        </div>
        <div className="contentWrap">
          <div className="inputTitle">아이디</div>
          <div className="inputWrap">
            <input
              type="text"
              className="input"
              placeholder="아이디를 입력해주세요."
              value={id}
              onChange={handleId}
            />
          </div>
          <div className="errorMessageWrap">
            {!idValid && id.length > 0 && (
              <div>아이디는 5~10자의 영소문자, 숫자만 입력 가능합니다.</div>
            )}
          </div>

          <div style={{ marginTop: "26px" }} className="inputTitle">
            비밀번호
          </div>
          <div className="inputWrap">
            <input
              type="password"
              className="input"
              placeholder="비밀번호를 입력해주세요."
              value={password}
              onChange={handlePassword}
            />
          </div>
          <div className="errorMessageWrap">
            {!passwordValid && password.length > 0 && (
              <div>비밀번호는 8~16자의 영소문자, 숫자, !@*&-_만 입력</div>
            )}
          </div>

          <div style={{ marginTop: "26px" }} className="inputTitle">
            비밀번호 확인
          </div>
          <div className="inputWrap">
            <input
              type="password"
              className="input"
              placeholder="비밀번호를 다시 입력해주세요."
              value={confirmPassword}
              onChange={handleConfirmPassword}
            />
          </div>
          <div className="errorMessageWrap">
            {!confirmPasswordValid && confirmPassword.length > 0 && (
              <div>비밀번호가 일치하지 않습니다.</div>
            )}
          </div>
        </div>

        <div>
          <button onClick={onClickConfirmButton} className="bottomButton">
            회원가입
          </button>
        </div>
        <div className="findWrap">
          <div className="find">
            <div>아이디 찾기</div>
            <span>&nbsp;|&nbsp;</span>
            <div>비밀번호 찾기</div>
          </div>
          <div className="signup" onClick={handleSignup}>
            로그인
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
