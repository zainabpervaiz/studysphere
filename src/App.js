import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Home from './pages/Home';
import AskQuestion from './pages/AskQuestion';
import Subject from './pages/Subject';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import About from './pages/About';

// Subject Detail Imports
import Mathmatics from './Details/Mathmatics';
import Physics from './Details/Physics';
import Chemistry from './Details/Chemistry';
import Biology from './Details/Biology';
import ComputerScience from './Details/ComputerScience';
import History from './Details/History';
import Geography from './Details/Geography';
import English from './Details/English';

import { Search } from 'lucide-react';

function App() {
  const [submittedQuestions, setSubmittedQuestions] = useState([]); // ✅ shared state

  return (
    <>
      <Navbar />

      {/* Search bar outside Navbar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#fff',
          padding: '8px 15px',
          borderRadius: '25px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          margin: '20px auto',
          maxWidth: '400px',
        }}
      >
        <Search size={18} style={{ marginRight: '8px' }} />
        <input
          type="text"
          placeholder="Search..."
          style={{
            border: 'none',
            outline: 'none',
            fontSize: '14px',
            width: '100%',
          }}
        />
      </div>

      <Routes>
        {/* Main Pages with shared state */}
        <Route path="/" element={<Home submittedQuestions={submittedQuestions} />} />
        <Route 
          path="/ask" 
          element={<AskQuestion submittedQuestions={submittedQuestions} setSubmittedQuestions={setSubmittedQuestions} />} 
        />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/subject" element={<Subject />} />
        <Route path="/about" element={<About />} />

        {/* Subject Detail Routes */}
        <Route path="/subject/Mathematics" element={<Mathmatics />} />
        <Route path="/subject/physics" element={<Physics />} />
        <Route path="/subject/chemistry" element={<Chemistry />} />
        <Route path="/subject/biology" element={<Biology />} />
        <Route path="/subject/computerScience" element={<ComputerScience />} />
        <Route path="/subject/history" element={<History />} />
        <Route path="/subject/geography" element={<Geography />} />
        <Route path="/subject/english" element={<English />} />
      </Routes>

      <div style={{ marginBottom: '20px' }}>
        <Footer />
      </div>
    </>
  );
}

export default App;
