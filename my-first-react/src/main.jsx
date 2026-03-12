//import React from "react";
//import {createRoot, createElement} from 'react-dom/client';
import {createRoot} from 'react-dom/client';

function Intro(){
  return(
    <>
      <h1>내 소개</h1>
      <p>저는 홍길동입니다.</p>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <Intro/>
);