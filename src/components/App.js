import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Auth from "./pages/Auth";
// import Forgot from './pages/Forgot';
import Pages from "./pages";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          {/* <Route exact path="/auth/forgot" element={<Forgot />} />
          <Route exact path="/auth" element={<Auth />} /> */}
          <Route path="*" element={<Pages />} />
        </Routes>
      </Router>
    );
  }

}

export default App;