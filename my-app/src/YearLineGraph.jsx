import "./YearLineGraph.css";
import React, { useState, useEffect } from "react";
import {  ResponsiveContainer,LineChart,Line,XAxis,YAxis,Legend,Tooltip} from "recharts";
import Dropdown12 from "./Dropdown12";
import Dropdown121 from "./Dropdown121";
function YearLineGraph({selected,selected1}) {
  let var1 = {selected};
  let var2 = {selected1};
  var myJSON1 = JSON.stringify(var1);
  var myJSON2 = JSON.stringify(var2);
  myJSON1 = myJSON1.substring(13);
  let l1= myJSON1.length;
  let myJSON11 =myJSON1.substring(0,l1-2)
  myJSON1 = myJSON11.replace(/[^a-zA-Z ]/g, "");

  myJSON2 = myJSON2.substring(14);
  let l2= myJSON2.length;
  let myJSON22 =myJSON2.substring(0,l2-2)
  myJSON2 = myJSON22.replace(/[^a-zA-Z ]/g, "");
  const [data, SetData] = useState([]);
  const [data1, SetData1] = useState([]);
  const [url,setUrl] = useState('http://localhost:9000/prices/2022')
  const [url1,setUrl1] = useState('http://localhost:9000/prices/monthly2022')
  const months = ["Jan", "Feb", "Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
  const [IsMonthSelected,setIsMonthSelected] = useState('2022')
  const [IsMonthSelected1,setIsMonthSelected1] = useState('2022')
  const getYearData = async () => {

    var response = await fetch(url);
    response=await response.json()
    SetData(response.reverse());
  };
  const getMonthlyData = async () => {

    var response = await fetch(url1);
    response=await response.json()
    for(let i=0;i< Object.keys(response).length;i++)
    {
      response[i]['Date']=months[i];
    }
    SetData1(response);
  };
  useEffect(() => {
      getYearData();
  },[url]);
  useEffect(() => {
    getMonthlyData();
},[url1]);

  return (
    <>
      <br/>
      <br/>
      <br/>
      <br/>
      <h2 className="chart-heading fst-italic fw-bold">Analysis of Normalised Prices of {myJSON11} & {myJSON22} with Daily and Monthly Data</h2>
      <div className="container-ylg">
      <div className="linelg">
        <h3 className="chart-headinglg fst-italic">Normalized Prices of {myJSON11} & {myJSON22} in Year {IsMonthSelected} - Daily</h3>
        <br/>
        <br/>
        {<Dropdown12 IsMonthSelected={IsMonthSelected} setIsMonthSelected={setIsMonthSelected} url ={url} setUrl={setUrl} />}
        <ResponsiveContainer width="100%" aspect={3}>
          <LineChart
            data={data}
            width={500}
            height={300}
            margin={{ top: 5, right: 50, left: 10, bottom: -35 }}
          >
            <XAxis
              dataKey="Date"
              interval={"preserveStartEnd"}
            />
            <YAxis/>
            <Tooltip contentStyle={{ backgroundColor: "white" }}/>
            <Legend />
            <Line
              dataKey={myJSON1}
              stroke='#003f5c'
              dot={false}
              //activeDot={{ r: 8 }}
            />
            <Line
              dataKey={myJSON2}
              stroke='purple'
              dot={false}
              //activeDot={{ r: 8 }}
            />

          </LineChart>
        </ResponsiveContainer>
        <br/>
        <br/>
      </div>
      <div className="linelg">
        <h3 className="chart-headinglg fst-italic">Normalized Prices of {myJSON11} & {myJSON22} in Year {IsMonthSelected1} - Monthly</h3>
        <br/>
        <br/>
        {<Dropdown121 IsMonthSelected1={IsMonthSelected1} setIsMonthSelected1={setIsMonthSelected1} url1 ={url1} setUrl1={setUrl1} />}
        <ResponsiveContainer width="100%" aspect={3}>
          <LineChart
            data={data1}
            width={500}
            height={300}
            margin={{ top: 5, right: 50, left: 10, bottom: -30 }}
          >
            <XAxis
              dataKey="Date"
              interval={"preserveStartEnd"}
            />
            <YAxis />
            <Tooltip contentStyle={{ backgroundColor: "white" }}/>
            <Legend />
            <Line
              dataKey={myJSON1}
              stroke='#003f5c'
              dot={false}
              //activeDot={{ r: 8 }}
            />
             <Line
              dataKey={myJSON2}
              stroke='purple'
              dot={false}
              //activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <br/>
        <br/>
      </div>
      </div>
    
    </>
  );
}
export default YearLineGraph;
