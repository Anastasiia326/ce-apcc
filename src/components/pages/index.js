import { Routes, Route, Navigate } from 'react-router-dom';

import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Collaborators from './Collaborators';
import News from './News';
import Publication from './Publication';
import Cohorts from './Cohorts';
import Resources from './Resource';

const Pages = () => {
  return (
    <div className="main-container">
      <header><Navbar /></header>

      <main className="content">
        <Routes>
          <Route path={'/home'} element={<Home />} />
          <Route path={'/about'} element={<AboutUs />} />
          <Route path={'/contact'} element={<ContactUs />} />
          <Route path={'/collaborators'} element={<Collaborators />} />
          <Route path={'/news'} element={<News />} />
          <Route path={'/publication'} element={<Publication />} />
          <Route path={'/resource'} element={<Resources />} />
          <Route path={'/cohorts'} element={<Cohorts />} />
          <Route path={'/'} element={<Navigate to='/home' />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default Pages;