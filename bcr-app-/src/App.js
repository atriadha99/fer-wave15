import { Container } from "react-bootstrap";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Foot from "./components/Foot";
import Navigation from "./components/Navigation";
import CariMobil from "./pages/CariMobil";
import DetailMobil from "./pages/DetailMobil";
import HasilPencarian from "./pages/HasilPencarian";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Container fluid className="p-0">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/cari-mobil" element={<CariMobil />} />
            <Route path="/hasil-pencarian" element={<HasilPencarian />} />
            <Route path="/detil-mobil/:carId" element={<DetailMobil />} />
          </Routes>
        </Container>
        <Foot />
      </Router>
    </>
  );
}

export default App;
