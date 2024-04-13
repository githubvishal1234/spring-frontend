import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstPage from "./components/FirstPage";
import Cars from "./components/Cars";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import Audi from "./components/Audi";
import Nexon from "./components/Nexon";
import Bmw from "./components/Bmw";
import Cruiser from "./components/Cruiser";
import Fortuner from "./components/Fortuner";
import Booking from "./components/Booking";
function App() {
  return (
    <div>
      <NavBar />
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/FirstPage" element={<FirstPage />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Cars" element={<Cars />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/audi" element={<Audi />}></Route>
            <Route path="/nexon" element={<Nexon />}></Route>
            <Route path="/bmw" element={<Bmw />}></Route>
            <Route path="/fortuner" element={<Fortuner />}></Route>
            <Route path="/cruiser" element={<Cruiser />}></Route>
            <Route path="/booking" element={<Booking />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;
