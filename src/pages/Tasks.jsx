import { useState } from 'react';
import { Plus, Filter, ChevronDown, ChevronUp, X } from 'lucide-react';

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Design UI', status: 'In Progress', priority: 'High', dueDate: '2023-12-31' },
    { id: 2, title: 'Implement API', status: 'Todo', priority: 'Medium', dueDate: '2024-01-15' },
    { id: 3, title: 'Write Documentation', status: 'Done', priority: 'Low', dueDate: '2023-11-30' },
  ]);
  const [filters, setFilters] = useState({ status: '', priority: '', dueDate: '' });
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newTask, setNewTask] = useState({ title: '', status: 'Todo', priority: 'Medium', dueDate: '' });
  const [errors, setErrors] = useState({});

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredTasks = tasks.filter(task => {
    return (
      (filters.status === '' || task.status === filters.status) &&
      (filters.priority === '' || task.priority === filters.priority) &&
      (filters.dueDate === '' || task.dueDate === filters.dueDate)
    );
  });

  const handleRowClick = (task) => {
    setSelectedTask(task);
    setIsDrawerOpen(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!newTask.title.trim()) newErrors.title = 'Title required';
    if (!newTask.dueDate) newErrors.dueDate = 'Due date required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
      setNewTask({ title: '', status: 'Todo', priority: 'Medium', dueDate: '' });
      setIsFormOpen(false);
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <button
          onClick={() => setIsFormOpen(true)}
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          <Plus className="mr-2" /> Create Task
        </button>
      </div>

      <div className="mb-4 p-4 bg-gray-100 rounded-lg">
        <div className="flex items-center mb-2">
          <Filter className="mr-2" />
          <h2 className="font-semibold">Filters</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
              <option value="">All</option>
              <option value="Todo">Todo</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Priority</label>
            <select
              name="priority"
              value={filters.priority}
              onChange={handleFilterChange}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
              <option value="">All</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Due Date</label>
            <input
              type="date"
              name="dueDate"
              value={filters.dueDate}
              onChange={handleFilterChange}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredTasks.map((task) => (
              <tr
                key={task.id}
                onClick={() => handleRowClick(task)}
                className="hover:bg-gray-50 cursor-pointer"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{task.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.status}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.priority}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isDrawerOpen && selectedTask && (
        <div className="fixed inset-0 overflow-hidden z-50">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setIsDrawerOpen(false)}></div>
            <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
              <div className="relative w-screen max-w-md">
                <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <h2 className="text-lg font-medium text-gray-900">Task Details</h2>
                      <button
                        onClick={() => setIsDrawerOpen(false)}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <X className="h-6 w-6" />
                      </button>
                    </div>
                    <div className="mt-6">
                      <div className="mb-4">
                        <h3 className="text-sm font-medium text-gray-500">Title</h3>
                        <p className="mt-1 text-sm text-gray-900">{selectedTask.title}</p>
                      </div>
                      <div className="mb-4">
                        <h3 className="text-sm font-medium text-gray-500">Status</h3>
                        <p className="mt-1 text-sm text-gray-900">{selectedTask.status}</p>
                      </div>
                      <div className="mb-4">
                        <h3 className="text-sm font-medium text-gray-500">Priority</h3>
                        <p className="mt-1 text-sm text-gray-900">{selectedTask.priority}</p>
                      </div>
                      <div className="mb-4">
                        <h3 className="text-sm font-medium text-gray-500">Due Date</h3>
                        <p className="mt-1 text-sm text-gray-900">{selectedTask.dueDate}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}

      {isFormOpen && (
        <div className="fixed inset-0 overflow-hidden z-50">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setIsFormOpen(false)}></div>
            <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
              <div className="relative w-screen max-w-md">
                <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <h2 className="text-lg font-medium text-gray-900">Create Task</h2>
                      <button
                        onClick={() => setIsFormOpen(false)}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <X className="h-6 w-6" />
                      </button>
                    </div>
                    <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                      <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                          type="text"
                          name="title"
                          id="title"
                          value={newTask.title}
                          onChange={handleFormChange}
                          className={`mt-1 block w-full border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                        />
                        {errors.title && <p className="mt-2 text-sm text-red-600">{errors.title}</p>}
                      </div>
                      <div>
                        <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                        <select
                          name="status"
                          id="status"
                          value={newTask.status}
                          onChange={handleFormChange}
                          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                        >
                          <option value="Todo">Todo</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Done">Done</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="priority" className="block text-sm font-medium text-gray-700">Priority</label>
                        <select
                          name="priority"
                          id="priority"
                          value={newTask.priority}
                          onChange={handleFormChange}
                          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                        >
                          <option value="Low">Low</option>
                          <option value="Medium">Medium</option>
                          <option value="High">High</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700">Due Date</label>
                        <input
                          type="date"
                          name="dueDate"
                          id="dueDate"
                          value={newTask.dueDate}
                          onChange={handleFormChange}
                          className={`mt-1 block w-full border ${errors.dueDate ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                        />
                        {errors.dueDate && <p className="mt-2 text-sm text-red-600">{errors.dueDate}</p>}
                      </div>
                      <div className="flex justify-end">
                        <button
                          type="submit"
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Create
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks;
