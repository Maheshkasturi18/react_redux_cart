import "./App.css";
import Header from "./Components/Header";
import CardDetails from "./Components/CardDetails";
import Cards from "./Components/Cards";
import Cart from "./Components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/cardDetails" element={<CardDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
