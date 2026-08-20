import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Badge from './components/Badge';
import Button from './components/Button';
import Card from './components/Card';
import List from './components/List';
import Modal from './components/Modal';
import Table from './components/Table';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-slate-100 p-6 flex flex-col space-y-6">
        <Home />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card title="DevOS Metrics">
            <div className="flex space-x-2">
              <Badge variant="success">Online</Badge>
              <Badge variant="info">Latency: 24ms</Badge>
            </div>
            <p className="text-sm text-gray-400 mt-2">Active pods: 18 / 18 healthy</p>
          </Card>
          <Card title="Quick Actions">
            <Button variant="primary">Deploy Service</Button>
          </Card>
        </div>
        <Table />
      </div>
    </BrowserRouter>
  );
}
