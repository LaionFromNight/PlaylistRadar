import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Main from './Main.jsx';
import Search from './Search.jsx';
import HowToStart from './HowToStart.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <nav>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Main
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Search
          </NavLink>
          <NavLink
            to="/how-to-start"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            How To Start
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Contact
          </NavLink>
        </nav>
      </aside>
      <div className="content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/search" element={<Search />} />
          <Route path="/how-to-start" element={<HowToStart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}
