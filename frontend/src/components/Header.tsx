import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

export default function Header({}: Props) {
  const navigate = useNavigate();

  return (
    <header className="w-full h-16 px-5 flex gap-10 bg-blue-950 text-white">
      <div className="w-fit h-full text-3xl hover:cursor-pointer flex items-center" onClick={()=>navigate('/')}>
        <p>JuiceHan App</p>
      </div>
      <nav className="flex h-full">
        <div className="h-full hover:cursor-pointer flex items-center" onClick={() => navigate("/papago")}>
          <div className="text-xl hover:cursor-pointer">
            <p>papago</p>
          </div>
        </div>
      </nav>
    </header>
  );
}
