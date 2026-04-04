import { useState } from "react"; //리엑트에서 useState훅을 가져옴
import { createRoot } from "react-dom/client";

function App(){
  const [myFlower, setMyFlower] = useState("무궁화꽃");

  const handleChange = (e) => {
    setMyFlower(e.target.value);
    alert(e.target.value);
  }

  return(
    <form>
      <select value={myFlower} onChange={handleChange}>
        <option value="장미꽃">장미꽃</option>
        <option value="국화">국화</option>
      </select>
    </form>

  )
}

createRoot(document.getElementById('root')).render(
  <App/>
)