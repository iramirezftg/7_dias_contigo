import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Intro from './pages/Intro';
import Dashboard from './pages/Dashboard';
import DayView from './pages/DayView';
import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-dark-900 text-white font-sans selection:bg-gold-500/30">
        <Routes>
          <Route 
            path="/" 
            element={
              isAuthenticated ? 
              <Navigate to="/home" replace /> : 
              <Intro onLogin={() => setIsAuthenticated(true)} />
            } 
          />
          <Route 
            path="/home" 
            element={
              isAuthenticated ? 
              <Dashboard /> : 
              <Navigate to="/" replace />
            } 
          />
          <Route 
            path="/dia/:dayId" 
            element={
              isAuthenticated ? 
              <DayView /> : 
              <Navigate to="/" replace />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
