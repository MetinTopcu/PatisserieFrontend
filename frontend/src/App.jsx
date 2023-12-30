import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Header/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import NotFound from "./components/Exceptions/NotFound";
import Footer from "./components/Footer/Footer";
import Account from "./components/Account";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
