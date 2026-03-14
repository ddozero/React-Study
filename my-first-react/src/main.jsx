//import React from "react";
//import {createRoot, createElement} from 'react-dom/client';
import {createRoot} from 'react-dom/client';

function Human(){
  
const age = 21;

return( //여기다가는 if문을 쓸 수는 없음
  <p>당신은 {(age)>=20? "성인" : "미성년자"} 입니다.</p>
);
}

createRoot(document.getElementById('root')).render(
  <Human />
);