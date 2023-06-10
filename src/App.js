import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Layout, Page } from "./Layout";
// import { Landing, About, Projects,Resume } from './components/index'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public */}
        {/* <Route path="/" index element={<Login />} /> */}

        {/* 로그인 */}
        <Route path="/" element={<Page />}>
          
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
