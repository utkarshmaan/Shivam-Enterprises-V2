import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServicePage from "./pages/service"; // Your ServicePage component
import Footer from "./components/custom/footer";
import Navbar from "./components/custom/navbar";
import HomePage from "./pages/home";

const App: React.FC = () => {
  return (
      <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:category" element={<ServicePage />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
