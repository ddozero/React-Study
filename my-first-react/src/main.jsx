import { useState } from "react"; //리엑트에서 useState훅을 가져옴
import { createRoot } from "react-dom/client";

function App(){

  const [name, setName] = useState("홍길동"); //초기값셋팅

  function handleChange(e){
    setName(e.target.value);
  }

  return(
    <form>
      <label>이름입력 :</label>
      <input type="text" value={name} onChange={handleChange}></input>
      <p>입력한 값 : {name}</p>
    </form>
  )
}

createRoot(document.getElementById('root')).render(
  <App/>
)