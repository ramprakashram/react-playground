import "./App.css";
import AtroposDemo from "./pages/AtroposDemo/AtroposDemo";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CustomForm from "./pages/CustomForm/CustomForm";
import Calculator from "./pages/Calculator/Calculator";
import Mapbox from "./pages/MapboxDemo/Mapbox";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/atropos" element={<AtroposDemo />} />
          <Route path="/custom-form" element={<CustomForm />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/mapbox" element={<Mapbox />} />
          <Route path="*" element={<Navigate to="/mapbox" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
