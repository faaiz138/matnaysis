import { useState } from "react";
import "./Dropdown1.css";
function Dropdown1({ selected1, setSelected1,IsToggled,setIsToggled }) {
  const [isActive, setIsActive] = useState(false);
  const options = ["InterestRate", "CrudeOil","PSXEquity","USDToPKR","KSEPrice","GoldRate","ArifHabib","AskariBank","EngroPowergen"];
  return (
    <div className="dropdown1">
      <div className="dropdown-btn1" onClick={(e) => setIsActive(!isActive)}>
        {selected1}
        <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-content1">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected1(option);
                setIsActive(false);
                setIsToggled(false);
              }}
              className="dropdown-item1"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown1;