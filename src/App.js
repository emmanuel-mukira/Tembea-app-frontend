import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Hotels from './components/pages/Hotels';
import Flights from './components/pages/Flights';
import FlightDetails from './components/pages/FlightDetails'; // Import the FlightDetails component
import HotelDetails from './components/pages/HotelDetails'; // Import the HotelDetails component
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import BookingsPage from './components/pages/Bookings';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/bookings" element={<BookingsPage />} />
        <Route path="/flights/:id" element={<FlightDetails />} /> {/* Add the route for flight details */}
        <Route path="/hotels/:id" element={<HotelDetails />} /> {/* Add the route for hotel details */}
      </Routes>
    </Router>
  );
}

export default App;
