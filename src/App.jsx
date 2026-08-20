import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import DevosTableComponentsReference from './pages/DevosTableComponentsReference';
import DevosEngineeringDashboard from './pages/DevosEngineeringDashboard';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
        {/* Navigation Header for Multi-Screen Stitch Pages */}
        <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
            <span className="font-bold text-sm tracking-wide text-white capitalize">devos-engineering</span>
          </div>
          <nav className="flex items-center space-x-2 overflow-x-auto py-1">
            <Link to="/" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Devos Table Components Reference</Link>
            <Link to="/devos-engineering-dashboard" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Devos Engineering Dashboard</Link>
          </nav>
        </header>

        {/* Dynamic Routed Pages */}
        <main className="flex-1 w-full">
          <Routes>
          <Route path="/" element={<DevosTableComponentsReference />} />
          <Route path="/devos-engineering-dashboard" element={<DevosEngineeringDashboard />} />
          <Route path="*" element={<DevosTableComponentsReference />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
