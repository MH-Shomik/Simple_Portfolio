import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { DataProvider } from './context/DataContext';

import Portfolio from './pages/Portfolio';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminPanel from './pages/Admin/AdminPanel';

// Protected route wrapper
function ProtectedRoute({ children }) {
  const isAuth = localStorage.getItem('admin_auth') === 'true';
  return isAuth ? children : <Navigate to="/admin" />;
}

export default function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Portfolio Route */}
          <Route path="/" element={<Portfolio />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route 
            path="/admin/dashboard" 
            element={
              <ProtectedRoute>
                <AdminPanel />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}
