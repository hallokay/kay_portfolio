import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Layout, Login, Home } from "./Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public */}
        <Route path="/" index element={<Login />} />

        {/* 로그인 */}
        <Route path="/home" element={ <Home/>}/>
        
      </Route>
    </Routes>
  );
}

export default App;
