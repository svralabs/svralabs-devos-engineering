import React from 'react';
import Table from '../components/Table';
import TableHeader from '../components/TableHeader';
import TableRow from '../components/TableRow';
import TableCell from '../components/TableCell';

const mockData = [
  { id: 'NODE-882-Alpha', status: 'Healthy', cpu: 25, memory: 65, disk: 40, network: '10.0.0.1' },
  { id: 'NODE-456-Beta', status: 'Warning', cpu: 75, memory: 85, disk: 60, network: '10.0.0.2' },
  { id: 'NODE-731-Gamma', status: 'Critical', cpu: 95, memory: 95, disk: 85, network: '10.0.0.3' },
  { id: 'NODE-123-Delta', status: 'Healthy', cpu: 35, memory: 55, disk: 30, network: '10.0.0.4' },
  { id: 'NODE-567-Epsilon', status: 'Warning', cpu: 65, memory: 75, disk: 50, network: '10.0.0.5' },
];

const statusColors = {
  Healthy: 'text-success',
  Warning: 'text-warning',
  Critical: 'text-error',
};

const statusDots = {
  Healthy: 'bg-success',
  Warning: 'bg-warning',
  Critical: 'bg-error',
};

export default function TableComponentsReference() {
  return (
    <main className="md:ml-64 pt-32 px-margin-mobile md:px-margin-desktop pb-section-gap-lg">
      <header className="mb-section-gap-sm max-w-4xl">
        <h1 className="font-display-hero text-display-hero uppercase leading-none text-mist mb-stack-md">Table Components</h1>
        <p className="font-body-lg text-body-lg text-mist/60 border-l-2 border-ember pl-6 max-w-2xl">
          A technical reference for high-density data visualization. DevOS tables prioritize data density, accessibility, and interactive states while maintaining an organic, minimalist aesthetic.
        </p>
      </header>

      <section className="mb-section-gap-lg">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-stack-md mb-stack-md">
          <div>
            <h3 className="font-h1 text-h1 text-ember uppercase tracking-tight">System Metrics</h3>
            <p className="font-caption text-caption text-mist/40">Real-time node performance monitoring</p>
          </div>
          <div className="flex gap-2">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-mist/40 text-sm">search</span>
              <input className="bg-ink-soft border border-mist/10 focus:border-ember focus:ring-0 rounded-md text-xs pl-9 pr-4 py-2 w-48 text-mist" placeholder="Filter nodes..." type="text" />
            </div>
            <button className="px-4 py-2 bg-ink-soft border border-mist/10 text-mist/60 hover:text-ember transition-colors flex items-center gap-2 rounded-md">
              <span className="material-symbols-outlined text-sm">filter_list</span>
              <span className="font-label-sm">Filters</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto glass-panel rounded-md">
          <Table>
            <TableHeader>
              <TableCell header>Node ID</TableCell>
              <TableCell header>Status</TableCell>
              <TableCell header className="text-center">CPU</TableCell>
              <TableCell header className="text-center">Memory</TableCell>
              <TableCell header className="text-center">Disk</TableCell>
              <TableCell header className="text-right">Network</TableCell>
            </TableHeader>
            <tbody className="text-xs font-light divide-y divide-mist/5">
              {mockData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>
                    <span className={`flex items-center gap-1.5 ${statusColors[item.status]}`}>
                      <span className={`w-1.5 h-1.5 ${statusDots[item.status]} rounded-full animate-pulse`}></span>
                      {item.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="w-16 h-1 bg-mist/10 rounded-full mx-auto overflow-hidden">
                      <div className="h-full bg-ember" style={{ width: `${item.cpu}%` }}></div>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="w-16 h-1 bg-mist/10 rounded-full mx-auto overflow-hidden">
                      <div className="h-full bg-ember" style={{ width: `${item.memory}%` }}></div>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="w-16 h-1 bg-mist/10 rounded-full mx-auto overflow-hidden">
                      <div className="h-full bg-ember" style={{ width: `${item.disk}%` }}></div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">{item.network}</TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </div>
      </section>
    </main>
  );
}
