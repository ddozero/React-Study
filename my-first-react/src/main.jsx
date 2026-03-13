//import React from "react";
//import {createRoot, createElement} from 'react-dom/client';
import {createRoot} from 'react-dom/client';

function Human(){
  
const style = {
  color : "white",
  fontSize: "3rem", //기존 font-size가아님
  backgroundColor:"black",
  fontWeight :"700"
}

return(
  <span style={style}>저는 홍길동입니다.</span>
);
}

createRoot(document.getElementById('root')).render(
  <Human />
);