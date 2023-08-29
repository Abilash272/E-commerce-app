import { useEffect, useState } from "react";
import AdminHome from "./components/adminHome/AdminHome";
import AdminLogin from "./components/adminLogin/AdminLogin";
import RegisterForm from "./components/registerForm/RegisterForm";

function App() {

  const [token, setToken] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if(storedToken){
      setToken(storedToken);
    }
  }, [])

  const handleToken = (newToken) => {
    setToken(newToken);
  }

  useEffect(() => {
    console.log("hello");
  }, [token])
  
  return (
    <div className="App">
      {/* <RegisterForm/> */}
      {!token? 
        <AdminLogin getToken= {handleToken} /> : <AdminHome />
      } 

    </div>
  );
}

export default App;
