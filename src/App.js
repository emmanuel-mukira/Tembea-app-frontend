import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hotels from './components/pages/Hotels';
import Flights from './components/pages/Flights';
import SignUp from './components/pages/SignUp';

function App() {
return (
<>
<Router>
<Navbar />
<Routes>
<Route path='/' element={<Home />} />
<Route path='/hotels' element={<Hotels />} />
<Route path='/flights' element={<Flights />} />
<Route path='/sign-up' element={<SignUp />} />
</Routes>
</Router>
</>
);
}

export default App;