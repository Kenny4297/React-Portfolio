import { Route, Routes, Link, useLocation } from 'react-router-dom';
import AboutMe from './components/aboutMe';
import './App.css';
import Contact from './components/contact';
import Portfolio from './components/portfolio';
import Resume from './components/resume';
import Footer from './components/footer';
import './index.css';
import React, {useState, useEffect} from 'react';

function App() {
    //setting up the Hook. 'currentPage' is a variable we can use to keep track
    //  'setCurrentPage' is a function we can use to update the state of the variable
    //   "aboutMe" is the default state. 
    const [currentPage, setCurrentPage] = useState(() => {
        const activePage = localStorage.getItem("activePage");
        return activePage || "aboutMe";
    });

    //Here we save the current URL path to this variable, by using the 'useLocation' hook. Remember to access this from the react router, NOT 'react' itself.
    const location = useLocation();

    //Here we update the class whenever the URL location changes
    useEffect(() => {
        //! Here we update the current page by calling the 'setCurrentPage' function! You can have hooks inside hooks!
        //  'pathname' -> this is a property of the 'location' object, and returns the current path name
        //  '.substring(1) -> this is a normal JS method that extracts a part of the string. The first argument specifies the start index. Since we want to remove the '/' from the path, this is what we use. 
            //To be more clear, let's say our path is "https://localhost:3000/portfolio".
            //If you logged out 'location', you would get a crazy object.
            //If you logged out 'location.pathway' you would get the full pathway shown above. 
        setCurrentPage(location.pathname.substring(1));
        //! Remember! This argument should be used when you want this particular item to be re-run whenever this object changes. We want this since we are keep track of the location!
    }, [location]);

    //We also need another useEffect hook to save the current page to local storage so it can persist on browser refresh.
    //^  Keep in mind, the 'local storage' API is built in and does not need to be imported. 
    useEffect(() => {
        localStorage.setItem("activePage", currentPage);
        //Just like before, we want this to be re-run to keep track of the current page. 
    }, [currentPage, location]);

    //Now we want to retrieve the page from local storage whe the component is first rendered (on mount)
    useEffect(() => {
        //Getting the page from local storage
        const activePage = localStorage.getItem("activePage");

        //Checking to see if there is a page called 'activePage' stored in local storage
        if (activePage) {
            setCurrentPage(activePage)
        } else {
            console.log("no local storage found!")
        }
        //We need to continue to update the location and local storage
    }, [location, setCurrentPage]);

    return (
        <div>
            <header>
                <nav>
                    <ul>
                        {/* We want to have the nav element be underlined when the user is on a certain page. We use the 'useState' hook to do this, since state is being changed! */}
                        <li className={currentPage === 'aboutMe' ? 'active' : ''}><Link to='/React-Portfolio' onClick={() => {
                            setCurrentPage('aboutMe')}}>About Me</Link></li>

                        <li className={currentPage === 'portfolio' ? 'active' : ''}><Link to="/React-Portfolio/portfolio" onClick={() => {
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
                <Route path='/React-Portfolio' element={<AboutMe />} />
                <Route path='/React-Portfolio/aboutMe' element={<AboutMe />}/>
                <Route path='/React-Portfolio/portfolio' element={<Portfolio />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/resume' element={<Resume />} />
            </Routes>

            <Footer />
        </div>
    )
}

export default App;
