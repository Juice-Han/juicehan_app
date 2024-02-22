import React from "react";

type Props = {};

const Papago = (props: Props) => {
  return (
    <div className="container mx-auto h-screen flex">
      <section className="w-1/2 h-full border">
        <div className="flex gap-5">
          <select>
            <option selected>한국어</option>
            <option>영어</option>
            <option>일본어</option>
            <option>중국어 간체</option>
            <option>중국어 번체</option>
          </select>
          <span>{'-->'}</span>
          <select>
            <option>한국어</option>
            <option selected>영어</option>
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
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, illo nostrum veritatis, ex totam blanditiis placeat reiciendis qui ipsum at alias accusamus, voluptas doloremque magni necessitatibus dicta mollitia suscipit culpa."
            }
          />
        </div>
        <div>
          <button>번역하기</button>
        </div>
      </section>
      <section className="w-1/2 h-full border">
        <div>
          <span>결과</span>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          corporis quasi! Consectetur tempore pariatur molestias, fuga veritatis
          iure optio modi nemo expedita magnam eos nostrum voluptatum at
          distinctio rerum illo!
        </div>
      </section>
    </div>
  );
};

export default Papago;
