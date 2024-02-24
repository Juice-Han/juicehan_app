import React, { useState } from "react";
import Header from "../components/Header";
import axios from "axios";

type Props = {};

const LoginPage = (props: Props) => {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [resStatus, setResStatus] = useState("");

  const getLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8080/user/login", {
        id: userId,
        password: userPassword,
      });
      console.log(response.data);
      console.log(response.status);
      if (response.status === 200) {
        setResStatus("로그인 성공!!");
      }
    } catch (err) {
      console.error(err);
      setResStatus("로그인 실패..");
    }
  };

  return (
    <>
      <Header></Header>
      <div className="container flex justify-center">
        <div className="flex flex-col w-1/4">
          <p className="text-2xl mb-5">로그인 페이지</p>
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
          <button onClick={getLogin}>로그인</button>
          <div>{resStatus}</div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
