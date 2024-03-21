import "./App.css";
import CardDetailsContainer from "./Containers/CardDetailsContainer";
import CardContainer from "./Containers/CardContainer";
import CartContainer from "./Containers/CartContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderContainer from "./Containers/HeaderContainer";

function App() {
  return (
    <div>
      <Router>
        {/* <Header /> */}
        <HeaderContainer/>
        <Routes>
          <Route path="/" element={<CardContainer />} />
          <Route path="/cardDetails/:id" element={<CardDetailsContainer />} />
          <Route path="/cart" element={<CartContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
