import "./LineGraph.css";
import React, { useState, useEffect } from "react";
import {  ResponsiveContainer,LineChart,Line,XAxis,YAxis,Legend,Tooltip,BarChart,Bar} from "recharts";
function LineGraph({selected,selected1}) {
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
  var url;
  const getYearlyData = async () => {

    var response = await fetch(url);
    response=await response.json()
    SetData(response);
  };
  useEffect(() => {
      url = 'http://localhost:9000/prices/yearlyagg'
      getYearlyData();
  },[]);
  return (
    <>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1 className="chart-heading fst-italic fw-bold">Analysis of Correlation between {myJSON11} & {myJSON22}</h1>
      <br/>
      <div className="container-l">
      <div className="line">
        <h3 className="chart-heading fst-italic">Normalized {myJSON11} & {myJSON22} over the Years via Line Graph</h3>
        <br/>
        <br/>
        <ResponsiveContainer width="100%" aspect={3}>
          <LineChart
            data={data}
            width={500}
            height={300}
            margin={{ top: 5, right: 40, left: 10, bottom: 5 }}
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
              activeDot={{ r: 8 }}
            />
            <Line
              dataKey={myJSON2}
              stroke='purple'
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="bar">
        <h3 className="chart-heading fst-italic">Normalized {myJSON11} & {myJSON22} over the Years via Bar Graph</h3>
        <br/>
        <ResponsiveContainer width="100%" aspect={3}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 40,
              left: 10,
              bottom: -20
            }}
          >
            
            <XAxis dataKey="Date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey={myJSON1} fill="#2f4b7c" />
            <Bar dataKey={myJSON2} fill="#800080" />
          </BarChart>
        </ResponsiveContainer>
        <br/>
      </div>
      </div>
      <br/>
    </>
  );
}
export default LineGraph;
