import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";
const App = () => {
  console.log("first");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);
  const onClickCountUP = () => {
    setNum(num + 1);
  };
  const onClickSwithcShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountUP}>カウントアップ</button>
      <br />
      <button onClick={onClickSwithcShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(^^)</p>}
    </>
  );
};
export default App;
