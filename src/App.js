
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AskQuestion from './pages/AskQuestion';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Subject from './pages/Subject';
import About from './pages/About';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ask" element={<AskQuestion />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/subject" element={<Subject />} />
          <Route path="/subject" element={<Subject />} />
<Route path="/about" element={<About />} />
<Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
