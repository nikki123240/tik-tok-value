import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
// import Button from '@material-ui/core/Button';
// import Tooltip from '@mui/material/Tooltip';

const ToDoList = () =>{

    const [num,setNum] = useState(0);

    const incNum = () =>{
        setNum(num + 1)
    };

    const decNum = () =>{
        if (num > 0){
            setNum(num - 1)
        }else{
            alert("sorry,limit exceeds")
            setNum(0)
        };
        
    };

  return(
    <>
  <div className="main_div">
    <div className="center_div">
      <h1>{num}</h1>
      
      <div className="div_btn">
      {/* <Tooltip title="Add"> */}
          <button variant="contained" onClick={incNum}>
          {/* Increm */}
          <AddIcon />
          </button>
          {/* </Tooltip> */}

          <button onClick={decNum}>
          {/* Decrem */}
          <IndeterminateCheckBoxIcon/>
          </button>
      </div>
    </div>
  </div>
  </>)
};

export default ToDoList;