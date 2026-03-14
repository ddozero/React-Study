import {createRoot} from 'react-dom/client'
import Flower from './Flower.jsx';

// function Flower(props){ 
//   return(
//     <p>저는 {props.color} 꽃입니다.</p>
//   )
// }

function Garden(){
  return(
    <>
      <p>저는 정원입니다.</p>
      <Flower />
    </>
  )
}

function Background(){
  return(
    <>
      <p>저는 하늘입니다.</p>
      <Flower />
      <Garden />
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <Background />
)