import { useState } from "react"; //리엑트에서 useState훅을 가져옴
import { createRoot } from "react-dom/client";

function App(){
  //방식 1
  //const[flower1, setFlower1] = useState();
  //const[flower2, setFlower2] = useState();

  //방식2
  const[flower, setFlower] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    //어떤식으로 값을 업데이트 ? 
    setFlower( values => ({...values, [name]:value}));
  }

  return(
    <form>
      Color : <input type = "text" name = "color" value = {flower.color} onChange={handleChange}/>
      Kind : <input type = "text" name = "kind" value = {flower.kind} onChange={handleChange}/>
      <p>{flower.color} {flower.kind}</p>
    </form>
  )
}

createRoot(document.getElementById('root')).render(
  <App/>
)