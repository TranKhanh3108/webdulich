import { Routes,Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/dangki" element={<Register/>} />
      <Route path="/dangnhap" element={<Login/>} />
    </Routes>
  );
}

export default App;
