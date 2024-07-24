import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/include/navbar';
import { BrowserRouter, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Home from './components/pages/home';
import Signup from './components/pages/signup';
import Onboarding from './components/pages/onboarding';
import Dashboard from './components/pages/dashboard';
import ContactUs from './components/pages/contact_us';
import LandingPage from './components/pages/landing-page/LandingPage'
import SignIn from './components/pages/signin';
import Footer from './components/pages/landing-page/components/Footer';

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  const noFooterPaths = ['/login', '/signup', '/dashboard'];
  const isAuthenticated = !!localStorage.getItem('access_token');


  return (
    <div>
      {location.pathname !== '/dashboard' && <NavBar />}
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />

          <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/about/contact-us" element={<ContactUs />} />
      </Routes>
      {!noFooterPaths.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
