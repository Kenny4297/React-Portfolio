import { Route, Routes, Link } from 'react-router-dom';
import AboutMe from './components/aboutMe';
import './App.css';
import Contact from './components/contact';
import Portfolio from './components/portfolio';
import Resume from './components/resume';
import Footer from './components/footer';
import './index.css';
import React, {useState} from 'react';

function App() {
    //setting up the Hook. 'currentPage' is a variable we can use to keep track
    //  'setCurrentPage' is a function we can use to update the state of the variable
    //   "aboutMe" is the default state. 
    const [currentPage, setCurrentPage] = useState("aboutMe");

    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li className={currentPage === 'aboutMe' ? 'active' : ''}><Link to='/' onClick={() => {
                            setCurrentPage('aboutMe')}}>About Me</Link></li>

                        <li className={currentPage === 'portfolio' ? 'active' : ''}><Link to="/portfolio" onClick={() => {
                            setCurrentPage('portfolio')}}>Portfolio</Link></li>

                        <li className={currentPage === 'contact' ? 'active' : ''}><Link to="/contact" onClick={() => {
                            setCurrentPage('contact')}}>Contact</Link></li>

                        <li className={currentPage === 'resume' ? 'active' : ''}><Link to="/resume" onClick={() => {
                            setCurrentPage('resume')}}>Resume</Link></li>
                    </ul>
            </nav>
            </header>

            {/* Don't forget that we need to add <BrowserRouter> to the index.js! Otherwise you will not get errors, but nothing will render... */}
            <Routes>
                <Route path='/' element={<AboutMe />} />
                <Route path='/aboutMe' element={<AboutMe />}/>
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/resume' element={<Resume />} />
            </Routes>

            <Footer />
        </div>
    )
}

export default App;
