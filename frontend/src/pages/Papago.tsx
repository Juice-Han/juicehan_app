import React, { useState } from "react";
import axios from "axios";

type Props = {};

const Papago = (props: Props) => {
  const [beforeTranslatedText, setBeforeTranslatedText] = useState<string>('')
  const [afterTranslatedText, setAfterTranslatedText] = useState<string>('')

  const translate = async () => {
    const response = await axios.post(
      "http://localhost:8080/papago/translate",
      {
        content: beforeTranslatedText
      }
    );
    setAfterTranslatedText(response.data.message.result.translatedText);
  };
  return (
    <div className="container mx-auto h-screen flex">
      <section className="w-1/2 h-full border">
        <div className="flex gap-5">
          <select>
            <option>한국어</option>
            <option selected>영어</option>
            <option>일본어</option>
            <option>중국어 간체</option>
            <option>중국어 번체</option>
          </select>
          <span>{"-->"}</span>
          <select>
            <option selected>한국어</option>
            <option>영어</option>
            <option>일본어</option>
            <option>중국어 간체</option>
            <option>중국어 번체</option>
          </select>
        </div>
        <div>
          <textarea
            rows={10}
            cols={30}
            value={
              beforeTranslatedText
            }
            onChange={(e) => setBeforeTranslatedText(e.target.value)}
          />
        </div>
        <div>
          <button onClick={translate}>번역하기</button>
        </div>
      </section>
      <section className="w-1/2 h-full border">
        <div>
          <span>결과</span>
        </div>
        <div>
          {afterTranslatedText}
        </div>
      </section>
    </div>
  );
};

export default Papago;
