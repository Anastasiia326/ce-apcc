import { Routes, Route, Navigate } from 'react-router-dom';

import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

const Pages = () => {
  return (
    <div className="main-container">
      <header><Navbar/></header>

      <main className="content">
        <Routes>
          <Route path={'/home'} element={<Home />} />
          <Route path={'/about'} element={<AboutUs />} />
          <Route path={'/contact'} element={<ContactUs />} />
          <Route path={'/'} element={<Navigate to='/home' />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default Pages;