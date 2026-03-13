import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Using env variable to keep it secure from GitHub
    if (password === import.meta.env.VITE_ADMIN_PASSWORD) {
      localStorage.setItem('admin_auth', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 p-8 rounded-2xl w-full max-w-sm border border-gray-700 shadow-2xl">
        <h2 className="text-2xl font-bold text-center text-white mb-2">Admin Portal</h2>
        <p className="text-gray-400 text-sm text-center mb-8">Enter your secure password to continue</p>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-accent transition-colors"
            />
          </div>
          {error && <p className="text-red-400 text-xs text-center">{error}</p>}
          <button
            type="submit"
            className="w-full bg-accent text-black font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Sign In
          </button>
        </form>

        <a href="/" className="block text-center mt-6 text-sm text-gray-500 hover:text-gray-300">
          ← Return to Portfolio
        </a>
      </div>
    </div>
  );
}
