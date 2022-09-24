import "./styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Yun from "./Yun/Yun";
import Worker1 from "./Worker1.js/Worker1";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Yun" element={<Yun />} />
          <Route path="/Worker1" element={<Worker1 />} />
        </Routes>
      </Router>
    </>

  );
}
