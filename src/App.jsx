import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const arr = [
  {
    name: "윤희",
    age: 19,
    job: "designer",
  },
  {
    name: "연지",
    age: 25,
    job: "무직",
  },
  {
    name: "현석",
    age: 41,
    job: "잡부",
  },
  {
    name: "장주",
    age: 50,
    job: "애아빠",
  },
];

function App() {
  const [state, setState] = useState(0);
  const [value, setValue] = useState("");

  return (
    <>
      <section className="border-2 border-red-800 py-2 text-center">
        {state}
      </section>
      <div className="border-1 border-blue-300 ">
        <input
          type="text"
          className="block"
          placeholder="인풋"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
      <button className=" text-lg" onClick={() => setState(state + 1)}>
        버튼 클릭
      </button>
      <button className=" text-lg" onClick={() => setState(state - 1)}>
        버튼 클릭
      </button>

      <span>인풋에 들어가는 값 : {value}</span>

      <ul className="my-10">
        {arr.map((element, index) => {
          return (
            <li className="py-5" key={index}>
              <p>이름 : {element.name}</p>
              <span>나이 : {element.age}</span>
              <p>직업 : {element.job}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
