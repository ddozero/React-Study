import { useState } from "react"; //리엑트에서 useState훅을 가져옴
import { createRoot } from "react-dom/client";

function App(){
  const [myText, setMyText] = useState("");

  function handleChange(e) {
    setMyText(e.target.value);
  }
  
  return(
    <form>
      <label>값을 입력 : </label>
      <textarea value={myText} onChange={handleChange}>
        
      </textarea>
      <p>입력 텍스트 : {myText} </p>
    </form>
  )
}

createRoot(document.getElementById('root')).render(
  <App/>
)