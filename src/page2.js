import "./App.css";
import Button from "./COMPS/Button";
import { setTxt2 } from "./redux/action";
import Input from "./COMPS/Input";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Page2 = () => {
  //const [text, setText] = useState("");
  //const [result, setResult] = useState("");
  const dispatch = useDispatch();
  const text2 = useSelector((state) => state.Text2);

  const addtoText = (val) => {
    dispatch(setTxt2(text2 + val));
  };
  const backSpace = () => {
    let number = text2.slice(0, -1);
    dispatch(setTxt2(number));
  };
  const saveValue2 = () => {
    dispatch(setTxt2(text2));
  };
  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input
          text={text2}
          inputChange={(i) => {
            dispatch(setTxt2(i.target.value));
          }}
        />
        <div className="row">
          <Button symbol="7" handleClick={addtoText} />
          <Button symbol="8" handleClick={addtoText} />
          <Button symbol="9" handleClick={addtoText} />
        </div>
        <div className="row">
          <Button symbol="4" handleClick={addtoText} />
          <Button symbol="5" handleClick={addtoText} />
          <Button symbol="6" handleClick={addtoText} />
        </div>
        <div className="row">
          <Button symbol="1" handleClick={addtoText} />
          <Button symbol="2" handleClick={addtoText} />
          <Button symbol="3" handleClick={addtoText} />
        </div>
        <div className="row">
          <Button symbol="0" handleClick={addtoText} />
          <Button symbol="." handleClick={addtoText} />
          <Button symbol="⌫" color="#791D14 " handleClick={backSpace} />
        </div>
        <div className="row">
          <div className="next">
            <Link
              to="/page3"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button symbol="NEXT" color="#791D14 " handleClick={saveValue2} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
