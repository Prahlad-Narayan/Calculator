import "./Input.css";

const Input = ({ text, inputChange }) => {
  return (
    <div className="input-wrapper">
      <div className="text">
        <input
          type="text"
          value={text}
          onChange={inputChange}
          style={{ backgroundColor: "#c24646" }}
        ></input>
      </div>
    </div>
  );
};

export default Input;
