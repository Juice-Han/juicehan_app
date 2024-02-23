import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";

type Props = {};

const Papago = (props: Props) => {
  const [beforeTranslatedText, setBeforeTranslatedText] = useState<string>("");
  const [afterTranslatedText, setAfterTranslatedText] = useState<string>("");

  const translate = async () => {
    const response = await axios.post(
      "http://localhost:8080/papago/translate",
      {
        content: beforeTranslatedText,
      }
    );
    setAfterTranslatedText(response.data.message.result.translatedText);
  };
  return (
    <>
      <Header />
      <div className="container mx-auto flex">
        <section className="w-1/2 h-[700px]">
          <div className="mt-20 flex flex-col justify-center items-center">
            <div className="w-2/3 flex gap-5 justify-center items-center">
              <select className="w-1/3 border-2 border-white rounded-2xl p-3 hover:border-2 hover:border-cyan-900 focus-visible:outline-none shadow transition duration-100">
                <option disabled>한국어</option>
                <option selected>영어</option>
                <option disabled>일본어</option>
                <option disabled>중국어 간체</option>
                <option disabled>중국어 번체</option>
              </select>
              <span>{"-->"}</span>
              <select className="w-1/3 border-2 border-white rounded-2xl p-3 hover:border-2 hover:border-cyan-900 focus-visible:outline-none shadow transition duration-100">
                <option selected>한국어</option>
                <option disabled>영어</option>
                <option disabled>일본어</option>
                <option disabled>중국어 간체</option>
                <option disabled>중국어 번체</option>
              </select>
            </div>
            <div className="w-full px-20 my-10 box-border">
              <textarea
                className="w-full h-[300px] p-5 text-xl border-2 border-gray-300 rounded-xl resize-none outline-blue-400"
                value={beforeTranslatedText}
                onChange={(e) => setBeforeTranslatedText(e.target.value)}
                placeholder="번역할 내용을 입력하세요"
              />
            </div>
            <div>
              <button
                className="px-8 py-2 bg-blue-500 text-white border-gray-400 rounded-xl transition hover:bg-blue-800 hover:shadow-md"
                onClick={translate}
              >
                번역하기
              </button>
            </div>
          </div>
        </section>
        <section className="w-1/2 h-[700px]">
          <div className="w-full flex flex-col mt-[99px] items-center">
            <div className="w-fit rounded-xl p-2">
              <p className="text-2xl">결과확인</p>
            </div>
            <div className="w-full px-20 my-5 box-border">
              <textarea
                className="w-full h-[300px] p-5 text-xl border-2 border-gray-300 rounded-xl resize-none focus:outline-none hover:cursor-default"
                value={afterTranslatedText}
                onChange={(e) => setBeforeTranslatedText(e.target.value)}
                readOnly
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Papago;
