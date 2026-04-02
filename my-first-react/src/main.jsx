import {createRoot} from 'react-dom/client';

function Flowers(){
  const flowers = ['장미', '매화', '국화'];

  return(
    <>
      <ul>
        {flowers.map(
          (flower,index) => <li key ={index}> 나는 {flower} 입니다.</li>
        )}
      </ul>
    
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <Flowers />
)