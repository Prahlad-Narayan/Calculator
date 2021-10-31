import Button from "./COMPS/Button";
import "./App.css";
import { setTxt3 } from "./redux/action";
import Input from "./COMPS/Input";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Page3 = () => {
  //const [text, setText] = useState("");
  //const [result, setResult] = useState("");
  const dispatch = useDispatch();

  const text3 = useSelector((state) => state.Text3);
  //const result3 = useSelector((state) => state.re);
  //const o1 = useSelector((state) => state.Text);
  //const o2 = useSelector((state) => state.Text2);

  const addtoText = (val) => {
    dispatch(setTxt3(text3 + val));
  };

  const saveValue3 = () => {
    dispatch(setTxt3(text3));
  };

  const backSpace = () => {
    let number = text3.slice(0, -1);
    dispatch(setTxt3(number));
  };

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input
          text={text3}
          inputChange={(i) => {
            dispatch(setTxt3(i.target.value));
          }}
        />
        <div className="row">
          <div>
            <div className="buttons">
              <Button symbol="/" handleClick={addtoText} />
            </div>
            <div className="buttons">
              <Button symbol="*" handleClick={addtoText} />
            </div>
            <div className="buttons">
              <Button symbol="+" handleClick={addtoText} />
            </div>
            <div className="buttons">
              <Button symbol="-" handleClick={addtoText} />
            </div>
            <div className="buttons">
              <Button symbol="⌫" handleClick={backSpace} />
            </div>
            <div className="row">
              <div className="next">
                <Link
                  to="/final"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Button
                    symbol="NEXT"
                    color="#791D14 "
                    handleClick={saveValue3}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
