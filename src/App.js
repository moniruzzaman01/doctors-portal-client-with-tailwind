import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Appoinment from "./Pages/Appoinment/Appoinment";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Main/Home";
import Login from "./Pages/Login/Login";
import Review from "./Pages/Review/Review";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/appoinment" element={<Appoinment />}></Route>
        <Route path="/review" element={<Review />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
