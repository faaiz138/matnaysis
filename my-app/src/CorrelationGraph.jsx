import "./CorrelationGraph.css";
import React, { useState, useEffect } from "react";
import { HeatMapGrid } from "react-grid-heatmap";
import {  ResponsiveContainer,LineChart,Line,XAxis,YAxis,Legend,Tooltip,BarChart,Bar} from "recharts";
function CorrelationGraph({selected,selected1}) {
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
  const [pdata, SetpData] = useState([]);
  var data = [
    {
      CorrelationValue: null,
      date: 2016
    },
    {
        CorrelationValue: 0,
        date: 2017
    },
    {
        CorrelationValue: 0,
        date: 2018
    },
    {
        CorrelationValue: 0,
        date: 2019
    },
    {
        CorrelationValue: 0,
        date: 2020
    },
    {
        CorrelationValue: 0,
        date: 2021
    },
    {
        CorrelationValue: 0,
        date: 2022
    }
  ];

  const get2022Data = async () => {
    var response = await fetch('http://localhost:9000/matrix/2022');
    response=await response.json()
    for (let i = 0; i < Object.keys(response).length; i++) 
        {
            if((response[i].Factor1.replace(/[^a-zA-Z ]/g, ""))===myJSON1 && (response[i].Factor2.replace(/[^a-zA-Z ]/g, ""))===myJSON2 )
            {
                data[6].CorrelationValue = Math.round(response[i].Relation_Value * 100) / 100
            }
        }
  };
  const get2021Data = async () => {
    var response = await fetch('http://localhost:9000/matrix/2021');
    response=await response.json()
    for (let i = 0; i < Object.keys(response).length; i++) 
    {
        if((response[i].Factor1.replace(/[^a-zA-Z ]/g, ""))===myJSON1 && (response[i].Factor2.replace(/[^a-zA-Z ]/g, ""))===myJSON2 )
        {
            data[5].CorrelationValue = Math.round(response[i].Relation_Value * 100) / 100
        }
    }
  };
  const get2020Data = async () => {
    var response = await fetch('http://localhost:9000/matrix/2020');
    response=await response.json()
    for (let i = 0; i < Object.keys(response).length; i++) 
    {
        if((response[i].Factor1.replace(/[^a-zA-Z ]/g, ""))===myJSON1 && (response[i].Factor2.replace(/[^a-zA-Z ]/g, ""))===myJSON2 )
        {
            data[4].CorrelationValue = Math.round(response[i].Relation_Value * 100) / 100
        }
    }
  };
  const get2019Data = async () => {
    var response = await fetch('http://localhost:9000/matrix/2019');
    response=await response.json()
    for (let i = 0; i < Object.keys(response).length; i++) 
    {
        if((response[i].Factor1.replace(/[^a-zA-Z ]/g, ""))===myJSON1 && (response[i].Factor2.replace(/[^a-zA-Z ]/g, ""))===myJSON2 )
        {
            data[3].CorrelationValue = Math.round(response[i].Relation_Value * 100) / 100
        }
    }
  };
  const get2018Data = async () => {
    var response = await fetch('http://localhost:9000/matrix/2018');
    response=await response.json()
    for (let i = 0; i < Object.keys(response).length; i++) 
    {
        if((response[i].Factor1.replace(/[^a-zA-Z ]/g, ""))===myJSON1 && (response[i].Factor2.replace(/[^a-zA-Z ]/g, ""))===myJSON2 )
        {
            data[2].CorrelationValue = Math.round(response[i].Relation_Value * 100) / 100
        }
    }
  };
  const get2017Data = async () => {
    var response = await fetch('http://localhost:9000/matrix/2017');
    response=await response.json()
    for (let i = 0; i < Object.keys(response).length; i++) 
    {
        if((response[i].Factor1.replace(/[^a-zA-Z ]/g, ""))===myJSON1 && (response[i].Factor2.replace(/[^a-zA-Z ]/g, ""))===myJSON2 )
        {
            data[1].CorrelationValue = Math.round(response[i].Relation_Value * 100) / 100
        }
    }
  };
  const get2016Data = async () => {
    var response = await fetch('http://localhost:9000/matrix/2016');
    response=await response.json()
    for (let i = 0; i < Object.keys(response).length; i++) 
    {
        if((response[i].Factor1.replace(/[^a-zA-Z ]/g, ""))===myJSON1 && (response[i].Factor2.replace(/[^a-zA-Z ]/g, ""))===myJSON2 )
        {
            data[0].CorrelationValue = Math.round(response[i].Relation_Value * 100) / 100
        }
    }
    SetpData(data)
  };
  useEffect(() => {
      get2022Data();
      get2021Data();
      get2020Data();
      get2019Data();
      get2018Data();
      get2017Data();
      get2016Data();
  },[]);
  return (
    <>
      <div className="container-cg">
      <div className="line-cg">
        <h3 className="chart-heading fst-italic">Variation in Correlation Values of {myJSON11} & {myJSON22} over the Years</h3>
        <br/>
        <br/>
        <ResponsiveContainer width="100%" aspect={3}>
          <LineChart
            data={pdata}
            width={500}
            height={300}
            margin={{ top: 5, right: 20, left: 5, bottom: 0 }}
          >
            <XAxis
              dataKey="date"
              interval={"preserveStartEnd"}
            />
            <YAxis type="number" domain={[-1, 1]} allowDataOverflow={true}/>
            <Tooltip contentStyle={{ backgroundColor: "white" }}/>
            <Legend />
            <Line
              dataKey='CorrelationValue'
              stroke='purple'
              //activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      </div>
      <br/>
    </>
  );
}
export default CorrelationGraph;
