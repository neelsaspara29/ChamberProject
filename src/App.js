import { Link } from "react-router-dom";
import Header from "./Components/Header/Header";
import Courusel from "./Components/Homepage/Courusel";
import Events from "./Components/Homepage/Events";
import Gallery from "./Components/Homepage/Gallery";

function App() {
  return (
    <>
      <Header />
      <Courusel />
      <Events />
      <Gallery />
    </>
  );
}

export default App;
