import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Layout, Login, Portfolio } from "./Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public */}
        {/* <Route path="/" index element={<Login />} /> */}

        {/* 로그인 */}
        <Route path="/" element={<Portfolio />} />
      </Route>
    </Routes>
  );
}

export default App;
