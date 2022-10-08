import { Link, Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home'
import Header from './Components/Header/Header'
import Upcoming from './Pages/Events/Upcoming'
import Past from './Pages/Events/Past'
import Team from "./Components/Homepage/Team";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
import MessageChairman from "./Pages/About/MessageChairman";
import MissionVision from "./Pages/About/MissionVision";

import GovCerculler from "./Pages/Cercullers/GovCerculler";
import CertificateOrigin from "./Pages/Sevices/CertificateOrigin";
import VisaService from "./Pages/Sevices/VisaService";
import Auditoriam from "./Pages/Sevices/Auditoriam";
import Conference from "./Pages/Sevices/Conference";
import Bulletin from "./Pages/Publications/Bulletin";
import Industry from "./Pages/Publications/Industry";
import AboutCoo from "./Pages/Coo/AboutCoo";
import ProcedureCoo from "./Pages/Coo/ProcedureCoo";
import StateCirculer from "./Pages/Cercullers/StateCirculer";
import ComiteeMain from "./Pages/Comitees/ComiteeMain";
import MembersDirectory from "./Pages/MembersDirectory/MembersDirectory";
import Association from "./Pages/Association/Association";
import Bhavnagar from "./Pages/About/Bhavnagar";
import Bearear from "./Pages/Team/Bearear";
import Executivecommitee from "./Pages/Team/ExecutiveCommitee";
import Secretaries from "./Pages/Team/Secretaries";
import Publications from "./Pages/Publications/Publications";
import Galleries from "./Pages/Gallery/Galleries";
import Header1 from "./Components/Header/Header1";
import Pastpresident from "./Pages/Team/Pastpresident";
import PressRelease from "./Pages/Publications/PressRelease";
import Gallery from "./Pages/Gallery/Gallery";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} ></Route>  

      </Routes>
      
      <Routes>
        <Route path="/upcomingevents" element={<Upcoming />} ></Route>
        <Route path="/pastevents" element={<Past />} ></Route>
        <Route path="/scciteam" element={<Team />} ></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/messageChairman" element={<MessageChairman />} ></Route>
        <Route path="/mission" element={<MissionVision />} ></Route>
        <Route path="/statecirculer" element={<GovCerculler />}></Route>
        <Route path="/govcirculer" element={<StateCirculer />}></Route>
        <Route path="/certificateoforigin" element={<CertificateOrigin />}></Route>
        <Route path="/visarecomandation" element={<VisaService />}></Route>
        <Route path="/auditorium" element={<Auditoriam />}></Route>
        <Route path="/conference" element={<Conference />}></Route>
        <Route path="/bulletin" element={<Bulletin />}></Route>
        <Route path="/industrialdirectory" element={<Industry />}></Route>
        <Route path="/otherpublication" element={<Publications />}></Route>
        <Route path="/pressrelease" element={<PressRelease />}></Route>
        <Route path="/aboutcoo" element={<AboutCoo />}></Route>
        <Route path="/procedure" element={<ProcedureCoo />}></Route>
        <Route path="/comiteemain" element={<ComiteeMain />}></Route>
        <Route path="/membersdirectory" element={<MembersDirectory />}></Route>
        <Route path="/associative" element={<Association />}></Route>
        <Route path="/bhavnagar" element={<Bhavnagar />}></Route>
        <Route path="/officebearear" element={<Bearear />}></Route>
        <Route path="/executivecommittee" element={<Executivecommitee />}></Route>
        <Route path="/secretaries" element={<Secretaries />}></Route>
        <Route path="/galleries" element={<Galleries />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/pastpresident" element={<Pastpresident />}></Route>



      </Routes>
      <Footer />
    </>
  );
}

export default App;
