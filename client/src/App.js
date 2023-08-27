import { useState } from "react";
import AdminHome from "./components/adminHome/AdminHome";
import AdminLogin from "./components/adminLogin/AdminLogin";
import RegisterForm from "./components/registerForm/RegisterForm";

function App() {

  const [token, setToken] = useState('');

  const handleLogin = (newToken) => {
    setToken(newToken);
  };

  return (
    <div className="App">
      {/* <RegisterForm/> */}
      {!token ? (
        <AdminLogin onLogin={handleLogin} />
      ) : (
        <AdminHome />
      )}
    </div>
  );
}

export default App;
