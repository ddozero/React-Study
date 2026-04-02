import { createRoot } from 'react-dom/client';
import Box from './Box';


function App() {
  return (
    <div>
      <Box>
        <h1>안녕하세요!</h1>
        <p>이 부분은 Box 컴포넌트 children 입니다.</p>
      </Box>
      <Box>
        <button>클릭</button>
      </Box>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <App />
);