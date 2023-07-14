import "./App.css";
import HomeScreen from "./Components/invoice/pages/HomeScreen";
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
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
