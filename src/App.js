import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Tracker from './pages/Tracker'; 

const App = () => {
    return ( 
        <Router>
            <Routes>
                <Route path="/" exact element={<Home />}></Route>
                <Route path="/tracker" exact element={<Tracker />}></Route>
            </Routes>
        </Router>
     );
}
 
export default App;