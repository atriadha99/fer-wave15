import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Register from "./Auth";
import NotFound from "./NotFound";
import SearchCar from "./SearchCar";
import Detail from "./SearchCar/Card/Detail";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our_services" element={<Home />} />
          <Route path="/whyus" element={<Home />} />
          <Route path="/testi" element={<Home />} />
          <Route path="/faq" element={<Home />} />
          <Route path="/search" element={<SearchCar />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
