import { Link, Route, Routes } from "react-router-dom";
import Home from './Pages/Home'
import Header from './Components/Header/Header'
import Upcoming from './Pages/Events/Upcoming'
import Team from "./Components/Homepage/Team";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/upcomingevents" element={<Upcoming />} ></Route>
        <Route path="/scciteam" element={<Team />} ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
