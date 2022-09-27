import { Link, Route, Routes } from "react-router-dom";
import Home from './Pages/Home'
import Header from './Components/Header/Header'
import Upcoming from './Pages/Events/Upcoming'
import Team from "./Components/Homepage/Team";
import Footer from "./Components/Footer/Footer";

import Courusel from "./Components/Homepage/Courusel";
import Events from "./Components/Homepage/Events";
import Gallery from "./Components/Homepage/Gallery";
import About from "./Pages/About/About";
import MessageChairman from "./Pages/About/MessageChairman";
import MissionVision from "./Pages/About/MissionVision";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/upcomingevents" element={<Upcoming />} ></Route>
        <Route path="/scciteam" element={<Team />} ></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/messageChairman" element={<MessageChairman />} ></Route>
        <Route path="/mission" element={<MissionVision />} ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
