import React from 'react';
import {
    BrowserRouter as Router, 
    Switch, 
    Route, 
    Link
} from 'react-router-dom';
import '../CSS/style_home.css'
import Header from './partials/Header';

const AppRouter = () => {
    return(
        <>
            <Router>
                <header>
                    <Header />
                </header>
            </Router>
        </>
    )
}

export default AppRouter;