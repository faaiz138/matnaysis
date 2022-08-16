import { useState } from "react";
import './Dropdown11.css'
function Dropdown11({dropdown1select,setdropdown1select,IsMonthToggled,setIsMonthToggled,IsDailyToggled,setIsDailyToggled}) {
  const [isActive, setIsActive] = useState(false);
  const options = ["Yearly", "Monthly","Daily"];
  const setMonthly = () =>  {
    let var1 = {dropdown1select}
    var1 = JSON.stringify(var1);
    var1 = var1.substring(20,var1.length-2);
    if(var1==='Monthly')
    {
      setIsMonthToggled(true)
      setIsDailyToggled(false)
    }
    else if(var1==='Daily')
    {
      setIsMonthToggled(true)
      setIsDailyToggled(true)
    }
    else{
      setIsMonthToggled(false)
      setIsDailyToggled(false)
    }
  }
  return (
    <div className="dropdown11">
      <div className="dropdown-btn11" onClick={(e) => setIsActive(!isActive)}>
        {dropdown1select}
        <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-content11">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setdropdown1select(option);
                setIsActive(false);
              }
            }
            
              className="dropdown-item11"
              
            >
              {option}
              
            </div>
          )
          )
          }
          
        </div> 
      )
      }
      {setMonthly()}
    </div>
  );
}

export default Dropdown11;