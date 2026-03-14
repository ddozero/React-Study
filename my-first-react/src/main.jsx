import {createRoot} from 'react-dom/client';


function Flower(props){
  return (
    <p>예쁜 {props.kind} 꽃이 피었습니다.</p>
  )
}

function Garden(){
  return(
    <>
      <p> 이 곳은 정원입니다. </p>
      <Flower kind = "장미"/>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <Garden />
);
