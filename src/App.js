import { Route, Routes, Link } from 'react-router-dom';
import { AboutMe } from './components/aboutMe';
import './App.css';
import { Contact } from './components/contact';
import { Portfolio, workProps } from './components/portfolio';
import { Resume } from './components/resume';

function App() {
    <>
        <h1>Kedgard Cordero</h1>

        <nav>
            <ul>
                <li><Link to="/">About Me</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/Resume">Resume</Link></li>
            </ul>
        </nav>
        
        <Routes>
            <Route path='/' element={<AboutMe />} />
            <Route path='/portfolio' element={<Portfolio workProps={workProps} />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/resume' element={<Resume />} />
        </Routes>

        <Footer />
    </>
}

export default App;
