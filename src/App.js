import { useState } from "react";

export default function App() {
  const [data, setData] = useState(null);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    console.log(data);
    setData(data);
  }
  return (
    <div>
      <h1>Hello World</h1>
      {/* <p>{data}</p> */}
      <button onClick={getAdvice}>Get Advice</button>
    </div>
  );
}
