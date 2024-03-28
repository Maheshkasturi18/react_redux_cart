import "./App.css";
import CardDetails from "./Components/CardDetails";
import Card from "./Components/Cards";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Cart from "./Components/Cart";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/cardDetails/:id" element={<CardDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
