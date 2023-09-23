import { useState } from "react";
import Spinner from "./coomponents/Spinner";
import "./app.css";

export default function App() {
  const [data, setData] = useState("");

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    console.log(data);
    setData(data.slip.advice);
  }
  return (
    <div className="">
      <Spinner />
      <h1>Hello World</h1>
      <h2>{data}</h2>
      <button onClick={getAdvice}>Get Advice</button>
    </div>
  );
}
