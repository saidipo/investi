import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Hero, Companies, Courses, Achievement, Categories, Feedback, CTA, Footer, About } from './components';
import Register from './components/Register';
import Login from './components/Login';
import './App.css';

const App = () => {
  return (
    <Router>
      {/* Navbar should be rendered on every route */}
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} /> {/* Add About route here */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/achievement" element={<Achievement />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/cta" element={<CTA />} />
        </Routes>
      </main>

      {/* Footer should also be rendered on every page */}
      <Footer />
    </Router>
  );
};

export default App;
