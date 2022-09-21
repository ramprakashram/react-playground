import "./App.css";
import AtroposDemo from "./pages/AtroposDemo/AtroposDemo";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CustomForm from "./pages/CustomForm/CustomForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/atropos" element={<AtroposDemo />} />
          <Route path="/custom-form" element={<CustomForm />} />
          <Route path="*" element={<Navigate to="/custom-form" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
