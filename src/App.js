import "./App.css";
import AtroposDemo from "./components/AtroposDemo/AtroposDemo";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AtroposDemo />
      <BrowserRouter>
        <Routes>
          <Route path="/atropos" element={<AtroposDemo />} />
          <Route path="*" element={<Navigate to="/atropos" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
