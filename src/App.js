import "./App.css";
import { setTxt } from "./redux/action";
import Button from "./COMPS/Button";
import Input from "./COMPS/Input";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const App = () => {
  //const [text, setText] = useState("");
  //const [result, setResult] = useState("");
  const dispatch = useDispatch();
  const text = useSelector((state) => state.Text);
  const addtoText = (val) => {
    dispatch(setTxt(text + val));
  };
  const saveValue = () => {
    dispatch(setTxt(text));
  };
  const backSpace = () => {
    let number = text.slice(0, -1);
    dispatch(setTxt(number));
  };
  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input
          text={text}
          inputChange={(i) => {
            dispatch(setTxt(i.target.value));
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
              to="/page2"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button symbol="NEXT" color="#791D14 " handleClick={saveValue} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
