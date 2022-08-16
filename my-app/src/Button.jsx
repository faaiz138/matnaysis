import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@mui/material';
import { useState,useEffect } from "react";
import "./Button.css"
function Button ({selected,selected1,IsToggled,setIsToggled,noGoogleVal,setnoGoogleVal}) {
    const [num,setNum] = useState('-')

    const [relation, SetRelation] = useState([]);
    const getRelation = async () => {
      const response = await fetch(
        "http://localhost:9000/matrix"
      );
      SetRelation(await response.json());
    };
    useEffect(() => {
      getRelation();
    }, []);
  
    const showCorrelation = () =>{
        let var1 = {selected};
        let var2 = {selected1};
        var myJSON1 = JSON.stringify(var1);
        var myJSON2 = JSON.stringify(var2);
        myJSON1 = myJSON1.substring(13);
        let l1= myJSON1.length;
        myJSON1 =myJSON1.substring(0,l1-2)

        myJSON2 = myJSON2.substring(14);
        let l2= myJSON2.length;
        myJSON2 =myJSON2.substring(0,l2-2)
        myJSON1=myJSON1.replace(/[^a-zA-Z ]/g, "")
        myJSON2=myJSON2.replace(/[^a-zA-Z ]/g, "")
        for (let i = 0; i < Object.keys(relation).length; i++) 
        {
            if((relation[i].Factor1.replace(/[^a-zA-Z ]/g, ""))===myJSON1 && (relation[i].Factor2.replace(/[^a-zA-Z ]/g, ""))===myJSON2 )
            {
                setNum(relation[i].Relation_Value.toFixed(2))
                setIsToggled(true);
            }
        }
        if(myJSON1==='ArifHabib' || myJSON1==='AskariBank' || myJSON1==='EngroPowergen' || myJSON2==='ArifHabib' || myJSON2==='AskariBank' || myJSON2==='EngroPowergen')
        {
          setnoGoogleVal(false)
        }
        else{
          setnoGoogleVal(true)
        }
    }
    return(
        <div className="text-center">
            <br/>
            <button onClick={showCorrelation} type="button" class="btn btn-success">Submit</button>
            <div style={{ marginLeft: '40%', marginTop: '60px', width: '20%'}}>
            <Box color="white" bgcolor="purple" p={1}>
            Correaltion Factor: {num}
            </Box>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}
export default Button