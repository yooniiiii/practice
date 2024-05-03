import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [state, setState] = useState(0);
  const [value, setValue] = useState("");

  return (
    <>
      <section className="border-2 border-red-600 py-2 text-center">
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
      <button onClick={() => setState(state + 1)}>버튼 클릭</button>
      <button onClick={() => setState(state - 1)}>버튼 클릭</button>

      <span>인풋에 들어가는 값 : {value}</span>
    </>
  );
}

export default App;
