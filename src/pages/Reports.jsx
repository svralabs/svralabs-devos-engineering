import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Download, Filter } from 'lucide-react';

const Reports = () => {
  const [filter, setFilter] = useState('monthly');
  const [data, setData] = useState([
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 2000 },
    { name: 'Apr', value: 2780 },
    { name: 'May', value: 1890 },
    { name: 'Jun', value: 2390 },
    { name: 'Jul', value: 3490 },
    { name: 'Aug', value: 2000 },
    { name: 'Sep', value: 2780 },
    { name: 'Oct', value: 1890 },
    { name: 'Nov', value: 2390 },
    { name: 'Dec', value: 3490 },
  ]);

  const handleFilterChange = (e) => {
    const newFilter = e.target.value;
    setFilter(newFilter);

    if (newFilter === 'weekly') {
      setData([
        { name: 'Week 1', value: 1000 },
        { name: 'Week 2', value: 1500 },
        { name: 'Week 3', value: 1200 },
        { name: 'Week 4', value: 1800 },
      ]);
    } else if (newFilter === 'quarterly') {
      setData([
        { name: 'Q1', value: 10000 },
        { name: 'Q2', value: 12000 },
        { name: 'Q3', value: 9000 },
        { name: 'Q4', value: 11000 },
      ]);
    } else {
      setData([
        { name: 'Jan', value: 4000 },
        { name: 'Feb', value: 3000 },
        { name: 'Mar', value: 2000 },
        { name: 'Apr', value: 2780 },
        { name: 'May', value: 1890 },
        { name: 'Jun', value: 2390 },
        { name: 'Jul', value: 3490 },
        { name: 'Aug', value: 2000 },
        { name: 'Sep', value: 2780 },
        { name: 'Oct', value: 1890 },
        { name: 'Nov', value: 2390 },
        { name: 'Dec', value: 3490 },
      ]);
    }
  };

  const handleExport = (format) => {
    if (format === 'csv') {
      const csvContent = "data:text/csv;charset=utf-8," +
        data.map(row => Object.values(row).join(',')).join('\n');
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "report_data.csv");
      document.body.appendChild(link);
      link.click();
    } else if (format === 'pdf') {
      alert('PDF export functionality would be implemented here');
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Reports</h1>
        <div className="flex space-x-2">
          <button
            onClick={() => handleExport('csv')}
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            <Download className="mr-2" size={16} />
            Export CSV
          </button>
          <button
            onClick={() => handleExport('pdf')}
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            <Download className="mr-2" size={16} />
            Export PDF
          </button>
        </div>
      </div>

      <div className="mb-6 p-4 bg-white rounded shadow">
        <div className="flex items-center mb-4">
          <Filter className="mr-2" size={20} />
          <h2 className="text-xl font-semibold">Filters</h2>
        </div>
        <div className="flex space-x-4">
          <select
            value={filter}
            onChange={handleFilterChange}
            className="px-4 py-2 border rounded"
          >
            <option value="monthly">Monthly</option>
            <option value="weekly">Weekly</option>
            <option value="quarterly">Quarterly</option>
          </select>
        </div>
      </div>

      <div className="p-4 bg-white rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Sales Report</h2>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Reports;
