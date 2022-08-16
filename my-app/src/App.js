import { useState } from "react";
import Dropdown from "./Dropdown"
import Dropdown1 from "./Dropdown1";
import Header from "./Header";
import Navbar from "./Navbar";
import Button from "./Button";
import LineGraph from "./LineGraph";
import YearLineGraph from "./YearLineGraph";
import Footer1 from "./Footer1";
import GoogleLineGraph from "./GoogleLineGraph";
import CorrelationGraph from "./CorrelationGraph";
import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [selected,setSelected] = useState("Factor 1")
  const [selected1,setSelected1] = useState('Factor 2')
  const [IsToggled,setIsToggled] = useState(false)
  const [noGoogleVal,setnoGoogleVal] = useState(true)
  return (
    <div className='App1'>
      <Navbar/>   
      <Header/>
      <Dropdown selected={selected} setSelected = {setSelected} IsToggled={IsToggled} setIsToggled={setIsToggled}/>
      <Dropdown1 selected1={selected1} setSelected1 = {setSelected1} IsToggled={IsToggled} setIsToggled={setIsToggled}/>
      <Button selected={selected} selected1= {selected1} IsToggled={IsToggled} setIsToggled={setIsToggled} noGoogleVal ={noGoogleVal} setnoGoogleVal={setnoGoogleVal}/>
      {IsToggled && <LineGraph selected={selected} selected1= {selected1}/>}
      {IsToggled &&  <CorrelationGraph  selected={selected} selected1= {selected1}/>}
      {IsToggled && <YearLineGraph selected={selected} selected1= {selected1}/>}
      {IsToggled && noGoogleVal && <GoogleLineGraph  selected={selected} selected1= {selected1}/>}
      {<Footer1/>}
    </div>
  );
}

export default App;