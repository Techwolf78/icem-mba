
// import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';
import './index.css';
import Icemmba from './pages/Computer';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import ApplyNowButton from './components/ApplyNowButton';


function App() {
  return (
    <Router>
      <div className="relative">
        <Navbar />
        <Routes>
          <Route path="/icemmba" element={<PageWithDynamicTitle title="ICEM" />} />
        </Routes>
        <Footer />
        <ApplyNowButton />
      </div>
    </Router>
  );
}


// Component to handle dynamic title
function PageWithDynamicTitle({ title }) {
  const dynamicTitle = `ICEM | ${title}`;

  return (
    <>
      <Helmet>
        <title>{dynamicTitle}</title>
      </Helmet>
      {title === 'ICEM' && <Icemmba />}
    </>
  );
}

PageWithDynamicTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
