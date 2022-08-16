import { useState } from "react";
import './Dropdown.css'
function Dropdown({ selected, setSelected,IsToggled,setIsToggled}) {
  const [isActive, setIsActive] = useState(false);
  const options = ["InterestRate", "CrudeOil","PSXEquity","USDToPKR","KSEPrice","GoldRate","ArifHabib","AskariBank","EngroPowergen"];
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
                setIsToggled(false)
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;