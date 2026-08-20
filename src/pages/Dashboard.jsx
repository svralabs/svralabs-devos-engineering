import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Activity, CheckCircle, Clock, Users } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { id: 1, title: 'Total Projects', value: '24', icon: <Users className="h-6 w-6" /> },
    { id: 2, title: 'Completed Tasks', value: '187', icon: <CheckCircle className="h-6 w-6" /> },
    { id: 3, title: 'Pending Tasks', value: '42', icon: <Clock className="h-6 w-6" /> },
    { id: 4, title: 'Team Members', value: '12', icon: <Users className="h-6 w-6" /> },
  ];

  const projects = [
    { id: 1, name: 'Website Redesign', status: 'In Progress', progress: 75, team: 'Design' },
    { id: 2, name: 'Mobile App', status: 'Completed', progress: 100, team: 'Development' },
    { id: 3, name: 'Marketing Campaign', status: 'Pending', progress: 20, team: 'Marketing' },
    { id: 4, name: 'Backend API', status: 'In Progress', progress: 60, team: 'Development' },
    { id: 5, name: 'UI/UX Audit', status: 'Completed', progress: 100, team: 'Design' },
  ];

  const taskData = [
    { name: 'Jan', completed: 40, pending: 20 },
    { name: 'Feb', completed: 30, pending: 15 },
    { name: 'Mar', completed: 20, pending: 10 },
    { name: 'Apr', completed: 27, pending: 13 },
    { name: 'May', completed: 18, pending: 9 },
    { name: 'Jun', completed: 23, pending: 11 },
  ];

  const activities = [
    { id: 1, action: 'Created new project', time: '2 hours ago', icon: <Activity className="h-5 w-5" /> },
    { id: 2, action: 'Completed task', time: '5 hours ago', icon: <CheckCircle className="h-5 w-5" /> },
    { id: 3, action: 'Updated profile', time: '1 day ago', icon: <Users className="h-5 w-5" /> },
    { id: 4, action: 'Added new team member', time: '2 days ago', icon: <Users className="h-5 w-5" /> },
    { id: 5, action: 'Reviewed code', time: '3 days ago', icon: <CheckCircle className="h-5 w-5" /> },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat) => (
          <div key={stat.id} className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
              <div className="text-blue-500">{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Project Overview</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {projects.map((project) => (
                  <tr key={project.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{project.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.status}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${project.progress}%` }}></div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.team}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Task Progress</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={taskData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="completed" fill="#3b82f6" />
              <Bar dataKey="pending" fill="#93c5fd" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center">
              <div className="text-blue-500 mr-4">{activity.icon}</div>
              <div>
                <p className="text-sm font-medium">{activity.action}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
