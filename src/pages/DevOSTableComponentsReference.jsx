import React, { useState } from 'react';
import DataTable from '../components/DataTable';
import SortableHeader from '../components/SortableHeader';
import PaginationControls from '../components/PaginationControls';

const mockData = [
  { id: 'NODE-882-Alpha', status: 'Healthy', cpu: 45, memory: 65, disk: 30, network: 1200 },
  { id: 'NODE-456-Beta', status: 'Warning', cpu: 78, memory: 89, disk: 55, network: 2400 },
  { id: 'NODE-123-Gamma', status: 'Critical', cpu: 92, memory: 95, disk: 87, network: 3600 },
  { id: 'NODE-777-Delta', status: 'Healthy', cpu: 32, memory: 45, disk: 22, network: 800 },
  { id: 'NODE-321-Epsilon', status: 'Warning', cpu: 67, memory: 72, disk: 45, network: 1800 },
];

const columns = [
  { key: 'id', label: 'Node ID', sortable: true },
  { key: 'status', label: 'Status', sortable: true },
  { key: 'cpu', label: 'CPU', sortable: true, align: 'center' },
  { key: 'memory', label: 'Memory', sortable: true, align: 'center' },
  { key: 'disk', label: 'Disk', sortable: true, align: 'center' },
  { key: 'network', label: 'Network', sortable: true, align: 'right' },
];

export default function DevOSTableComponentsReference() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'asc' });

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = React.useMemo(() => {
    const sortableData = [...mockData];
    if (sortConfig.key) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [mockData, sortConfig]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

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
          <DataTable
            columns={columns}
            data={currentItems}
            renderHeader={(column) => (
              <SortableHeader
                column={column}
                sortConfig={sortConfig}
                onSort={requestSort}
              />
            )}
            renderCell={(item, column) => {
              if (column.key === 'status') {
                const statusColor = item.status === 'Healthy' ? 'bg-success' : item.status === 'Warning' ? 'bg-warning' : 'bg-error';
                return (
                  <span className="flex items-center gap-1.5 text-success">
                    <span className={`w-1.5 h-1.5 ${statusColor} rounded-full animate-pulse`}></span>
                    {item[column.key]}
                  </span>
                );
              }
              return item[column.key];
            }}
          />
        </div>

        <PaginationControls
          currentPage={currentPage}
          totalPages={Math.ceil(mockData.length / itemsPerPage)}
          onPageChange={setCurrentPage}
        />
      </section>
    </main>
  );
}
