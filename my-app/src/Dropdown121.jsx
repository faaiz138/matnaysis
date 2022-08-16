import { useState } from "react";
import "./Dropdown121.css"
function Dropdown121({IsMonthSelected1,setIsMonthSelected1,url1,setUrl1}) {
  const [isActive, setIsActive] = useState(false);
  const [selected1,setSelected1] = useState('2022')
  const options = ["2016", "2017","2018","2019","2020","2021","2022"];

  const setMonthly = () =>  {
    let var1 = {selected1};
    var1 = JSON.stringify(var1);
    let var2 = {url1}
    var2 = JSON.stringify(var2)
    var1 = var1.substring(14,var1.length-2);
    var2 = var2.substring(9,var2.length-6)
    var2 = var2 + var1
    setUrl1(var2)
  }
  return (
    <div className="dropdown121">
      <div className="dropdown-btn121" onClick={(e) => setIsActive(!isActive)}>
        {selected1}
        <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-content121">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected1(option);
                setIsActive(false);
                setIsMonthSelected1(option)
              }
            }
              className="dropdown-item121"
            >
              {option}
            </div>
          ))}
        </div>
      )}
      {setMonthly()}
    </div>
  );
}

export default Dropdown121;