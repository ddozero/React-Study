//import React from "react";
//import {createRoot, createElement} from 'react-dom/client';
import {createRoot} from 'react-dom/client';

function Human(){
  const kildong ={
  name : "홍길동",
  address : "서울",
  height : "180cm"
}
return(
  <>
    <h1>저는 { kildong.name } 입니다. </h1>
    <p>{ kildong.address }에 살고 있고요, 키는  { kildong.height } 입니다. </p>
  </>
);
}

createRoot(document.getElementById('root')).render(
  <Human />
);