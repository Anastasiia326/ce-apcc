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
import NewsDashboard from "../common/News/NewsDashboard";
import NewsDetail from './NewsDetail';
import PublicationDashboard from "../common/Publication/PublicationDashboard";
import PublicationDetail from "./PublicationDetail";

const Pages = () => {
  return (
    <div className="main-container">
      <header><Navbar /></header>

      <main className="content">
        <Routes>
          <Route path={'/home'} element={<Home />} />
          {/* <Route path={'/aim'} element={<Navigate to="/about" />} /> */}
          <Route path={'/about'} element={<AboutUs />} />
          <Route path={'/contact'} element={<ContactUs />} />
          <Route path={'/collaborators'} element={<Collaborators />} />
          <Route path={'/news/*'} element={<News />}>
            <Route index element={<NewsDashboard />} />
            <Route path={'detail/:id'} element={<NewsDetail />} />
          </Route>
          <Route path={'/publication'} element={<Publication />}>
            <Route index element={<PublicationDashboard />} />
            <Route path={'detail/:id'} element={<PublicationDetail />} />
          </Route>
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