import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const [idValid, setIdValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

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

  
  const onClickConfirmButton = () => {
    if (idValid && passwordValid) {
      alert("로그인에 성공했습니다.");
    } else {
      alert("아이디 또는 비밀번호가 유효하지 않습니다.");
    }
  };

  const handleLogin = () => {
    navigate("/signup");
  };

  return (
    <div className="headerWrap">
      <div className="headerLogin">로그인</div>
      <div className="loginPage">
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
            {!idValid && id.length > 0 && <div>아이디를 입력해주세요.</div>}
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
              <div>비밀번호를 입력해주세요.</div>
            )}
          </div>
        </div>
        <div>
          <button onClick={onClickConfirmButton} className="bottomButton">
            로그인
          </button>
        </div>
        <div className="findWrap">
          <div className="find">
            <div>아이디 찾기</div>
            <span>&nbsp;|&nbsp;</span>
            <div>비밀번호 찾기</div>
          </div>
          <div className="signup" onClick={handleLogin}>
            회원가입
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
