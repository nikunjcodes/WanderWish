import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Companies from "./components/Companies/Companies";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import SearchResults from "./components/SearchResults/SearchResults"; // Import the SearchResults component

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <div className="white-gradient" />
          <Header />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </div>
        <Companies />
        <Residencies />
        <Value />
        <Contact />
        <GetStarted />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
