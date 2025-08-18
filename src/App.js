import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Home from './pages/Home';
import AskQuestion from './pages/AskQuestion';
import Subject from './pages/Subject';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import About from './pages/About';
import { QuestionProvider } from "./QuestionContext"; // Context import

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
  return (
    <QuestionProvider>   {/* Wrap the whole app with Context */}
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
        {/* Main Pages */}
        <Route path="/" element={<Home />} />   
        <Route path="/ask" element={<AskQuestion />} />
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
    </QuestionProvider>
  );
}

export default App;
