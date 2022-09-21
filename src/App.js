import "./App.css";
import AtroposDemo from "./pages/AtroposDemo/AtroposDemo";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CustomForm from "./pages/CustomForm/CustomForm";
import Calculator from "./pages/Calculator/Calculator";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/atropos" element={<AtroposDemo />} />
          <Route path="/custom-form" element={<CustomForm />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="*" element={<Navigate to="/calculator" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
