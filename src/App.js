import Header from "./Header";
import Content from "./assets/Content";
import "./App.css";
import Login from "./assets/Login";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route index path="/" element={<Content/>}/>
        <Route path="login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
