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
import { AuthProvider } from './components/pages/AuthContext'; // Import the AuthProvider

function App() {
  return (
      <Router>
        <Navbar />
        <AuthProvider>
        <Routes>
        <Route path="/bookings" element={<BookingsPage />} />
        <Route path="/sign-in" element={<SignIn />} />
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/flights/:id" element={<FlightDetails />} />
          <Route path="/hotels/:id" element={<HotelDetails />} />
        </Routes>
        </AuthProvider>
      </Router>
  );
}

export default App;
