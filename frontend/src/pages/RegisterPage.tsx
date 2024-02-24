import axios from "axios";
import React, { useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

type Props = {};

const RegisterPage = (props: Props) => {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordAssertion, setUserPasswordAssertion] = useState("");
  const [userName, setUserName] = useState("");
  const [resStatus, setResStatus] = useState("");

  const navigate = useNavigate();

  const getRegister = async () => {
    if(userPassword !== userPasswordAssertion){
        window.alert('비밀번호를 확인해주세요');
        return;
    }
    try {
      const response = await axios.post("http://localhost:8080/user/register", {
        id: userId,
        password: userPassword,
        name: userName
      });
      console.log(response.data);
      console.log(response.status);
      if (response.status === 200) {
        setResStatus("회원가입 성공!!");
        navigate('/user/login');
      }
    } catch (err) {
      console.error(err);
      setResStatus("회원가입 실패..");
    }
  };

  return (
    <>
      <Header></Header>
      <div className="container flex justify-center">
        <div className="flex flex-col w-1/4">
          <p className="text-2xl mb-5">회원가입 페이지</p>
          <label>아이디</label>
          <input
            className="border"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          ></input>
          <label>비밀번호</label>
          <input
            className="border"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          ></input>
          <label>비밀번호 확인</label>
          <input
            className="border"
            value={userPasswordAssertion}
            onChange={(e) => setUserPasswordAssertion(e.target.value)}
          ></input>
          <label>이름</label>
          <input
            className="border"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
          <button onClick={getRegister}>회원가입</button>
          <div>{resStatus}</div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
