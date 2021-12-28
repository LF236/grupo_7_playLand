import React from 'react';
import {
    BrowserRouter as Router, 
    Switch, 
    Route, 
    Routes,
    Link
} from 'react-router-dom';
import '../CSS/style_home.css'
import Header from './partials/Header';
import Footer from './partials/Footer';
import Home from './Home';
import NotFound from './NotFound';
const AppRouter = () => {
    return(
        <>
            <Router>
                <header>
                    <Header />
                </header>
                
                <main>
                    <Routes>
                        <Route exact path="/" element={ <Home /> } />
                        <Route exact path="/test" element={ <NotFound /> } />
                    </Routes>
                </main>

                <footer>
                    <Footer />
                </footer>
            </Router>
        </>
    )
}

export default AppRouter;