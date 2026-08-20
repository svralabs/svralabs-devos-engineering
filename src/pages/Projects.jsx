import { useState } from 'react';
import { Plus, ChevronUp, ChevronDown } from 'lucide-react';

const Projects = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: 'Project Alpha', status: 'Active', createdAt: '2023-01-15' },
    { id: 2, name: 'Project Beta', status: 'Inactive', createdAt: '2023-02-20' },
    { id: 3, name: 'Project Gamma', status: 'Completed', createdAt: '2023-03-10' },
  ]);
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProject, setNewProject] = useState({ name: '', status: 'Active' });
  const [errors, setErrors] = useState({});

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedProjects = [...projects].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!newProject.name.trim()) newErrors.name = 'Project name required';
    if (!newProject.status) newErrors.status = 'Status required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setProjects([...projects, { ...newProject, id: projects.length + 1, createdAt: new Date().toISOString().split('T')[0] }]);
      setNewProject({ name: '', status: 'Active' });
      setIsModalOpen(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Projects</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          <Plus className="mr-2" /> New Project
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b cursor-pointer" onClick={() => requestSort('name')}>
                <div className="flex items-center">
                  Name
                  {sortConfig.key === 'name' && (sortConfig.direction === 'asc' ? <ChevronUp className="ml-1" /> : <ChevronDown className="ml-1" />)}
                </div>
              </th>
              <th className="py-2 px-4 border-b cursor-pointer" onClick={() => requestSort('status')}>
                <div className="flex items-center">
                  Status
                  {sortConfig.key === 'status' && (sortConfig.direction === 'asc' ? <ChevronUp className="ml-1" /> : <ChevronDown className="ml-1" />)}
                </div>
              </th>
              <th className="py-2 px-4 border-b cursor-pointer" onClick={() => requestSort('createdAt')}>
                <div className="flex items-center">
                  Created At
                  {sortConfig.key === 'createdAt' && (sortConfig.direction === 'asc' ? <ChevronUp className="ml-1" /> : <ChevronDown className="ml-1" />)}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedProjects.map((project) => (
              <tr key={project.id}>
                <td className="py-2 px-4 border-b">{project.name}</td>
                <td className="py-2 px-4 border-b">{project.status}</td>
                <td className="py-2 px-4 border-b">{project.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Create New Project</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newProject.name}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  id="status"
                  name="status"
                  value={newProject.status}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded ${errors.status ? 'border-red-500' : 'border-gray-300'}`}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Completed">Completed</option>
                </select>
                {errors.status && <p className="text-red-500 text-xs mt-1">{errors.status}</p>}
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border rounded hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
