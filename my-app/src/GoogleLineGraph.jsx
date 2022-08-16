import "./GoogleLineGraph.css";
import React, { useState, useEffect } from "react";
import {  ResponsiveContainer,LineChart,Line,XAxis,YAxis,Legend,Tooltip,BarChart,Bar} from "recharts";
function GoogleLineGraph({selected,selected1}) {
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
  var op1,op2;
  if(myJSON1==='CrudeOil' || myJSON2==='CrudeOil' )
  {
    if(myJSON1==='CrudeOil')
    {
        op1 = myJSON1+'Google'
    }
    else{
        op2 = myJSON2+ 'Google'
    }
  }
  if(myJSON1==='InterestRate' || myJSON2==='InterestRate' )
  {
    if(myJSON1==='InterestRate')
    {
        op1 = myJSON1.substring(0,myJSON1.length-4)
        op1 = op1+'Google'
    }
    else{
        op2 = myJSON2.substring(0,myJSON2.length-4)
        op2 = op2+'Google'
    }
  }
  if(myJSON1==='PSXEquity' || myJSON2==='PSXEquity' )
  {
    if(myJSON1==='PSXEquity')
    {
        op1 = myJSON1.substring(0,myJSON1.length-6)
        op1 = op1+'Google'
    }
    else{
        op2 = myJSON2.substring(0,myJSON2.length-6)
        op2 = op2+'Google'
    }
  }
  if(myJSON1==='USDToPKR' || myJSON2==='USDToPKR' )
  {
    if(myJSON1==='USDToPKR')
    {
        op1 = myJSON1.substring(0,myJSON1.length-5)
        op1 = op1+'PKRGoogle'
    }
    else{
        op2 = myJSON2.substring(0,myJSON2.length-5)
        op2 = op2+'PKRGoogle'
    }
  }
  if(myJSON1==='KSEPrice' || myJSON2==='KSEPrice' )
  {
    if(myJSON1==='KSEPrice')
    {
        op1 = myJSON1.substring(0,myJSON1.length-5)
        op1 = op1+'Google'
    }
    else{
        op2 = myJSON2.substring(0,myJSON2.length-5)
        op2 = op2+'Google'
    }
  }
  if(myJSON1==='GoldRate' || myJSON2==='GoldRate')
  {
    if(myJSON1==='GoldRate')
    {
        op1 = myJSON1.substring(0,myJSON1.length-4)
        op1 = op1+'Google'
    }
    else{
        op2 = myJSON2.substring(0,myJSON2.length-4)
        op2 = op2+'Google'
    }
  }
  const [data, SetData] = useState([]);
  var url;
  const getGoogleData = async () => {

    var response = await fetch(url);
    response=await response.json()
    SetData(response);
  };
  useEffect(() => {
      url = 'http://localhost:9000/prices/yearlyagg'
      getGoogleData();
  },[]);
  return (
    <>
      <br/>
      <br/>
      <br/>

      <h2 className="chart-heading fst-italic fw-bold">Analysis of Prices of {myJSON11} & {myJSON22} against Google Searches</h2>
      <br/>
      <div className="container-lg">
      <div className="linelg">
        <h3 className="chart-headinglg fst-italic">Comaprision of Prices of {myJSON11} with Google Searches </h3>
        <br/>
        <br/>
        <ResponsiveContainer width="100%" aspect={3}>
          <LineChart
            data={data}
            width={500}
            height={300}
            margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
          >
            <XAxis
              dataKey="Date"
              interval={"preserveStartEnd"}
            />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip contentStyle={{ backgroundColor: "white" }}/>
            <Legend />
            <Line
                yAxisId="left"
              dataKey={myJSON1}
              stroke='#003f5c'
              activeDot={{ r: 8 }}
            />
            <Line
              yAxisId="right"
              dataKey={op1}
              stroke='purple'
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="linelg">
        <h3 className="chart-headinglg fst-italic">Comaprision of Prices of {myJSON22} with Google Searches </h3>
        <br/>
        <br/>
        <ResponsiveContainer width="100%" aspect={3}>
          <LineChart
            data={data}
            width={500}
            height={300}
            margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
          >
            <XAxis
              dataKey="Date"
              interval={"preserveStartEnd"}
            />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip contentStyle={{ backgroundColor: "white" }}/>
            <Legend />
            <Line
              yAxisId="left"
              dataKey={myJSON2}
              stroke='#003f5c'
              activeDot={{ r: 8 }}
            />
             <Line
              yAxisId="right"
              dataKey={op2}
              stroke='purple'
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </>
  );
}
export default GoogleLineGraph;
