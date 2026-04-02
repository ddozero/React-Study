import { createRoot } from "react-dom/client";

function AdminPanel(){
  return(
    <p>관리자 전용 페이지입니다</p>
  );
}

function UserPanel(){
  return(
    <p>일반 사용자 페이지입니다</p>
  )
}

function App({isAdmin}){

  return (
    <>
      {isAdmin ? <AdminPanel/> : <UserPanel/>}
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <App isAdmin={false}/>
);