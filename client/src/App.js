import "./App.css";
import HomeScreen from "./Components/invoice/pages/HomeScreen";
import InvoiceScreen from "./Components/invoice/pages/InvoiceScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./Components/shared/SideBar";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <SideBar />
        <Routes>
          <Route>
            <Route path="/" exact element={<HomeScreen />} />
            <Route path="invoice/:id" element={<InvoiceScreen />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
