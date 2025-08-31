import { useState } from "react";
import "./App.css";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/Home";
import MobileNav from "./components/navbar/MobileNav";
import { AnimatePresence } from "framer-motion";

function App() {
  const [navActive, setNavActive] = useState(false);

  return (
    <div className="App">
      <Navbar setNavActive={setNavActive} navActive={navActive} />

      <AnimatePresence>
        {navActive && (
          <MobileNav setNavActive={setNavActive} navActive={navActive} />
        )}
      </AnimatePresence>

      <Home />
      <Footer />
    </div>
  );
}

export default App;
