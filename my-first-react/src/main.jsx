import { useState } from "react"; //리엑트에서 useState훅을 가져옴
import { createRoot } from "react-dom/client";

function App(){
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }
  
  function handleSubmit(e){
    e.preventDefault(); 
    alert(name);
  }

  return(
    <form onSubmit={handleSubmit}>
      <label>이름입력:</label>
      <input type="text" value={name} onChange={handleChange}/>
      <input type="submit"/>
    </form>
  )
}

createRoot(document.getElementById('root')).render(
  <App/>
)