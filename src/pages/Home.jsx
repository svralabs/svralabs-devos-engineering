import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Folder, FileText, Settings, Users, ChevronRight } from 'lucide-react';

const Home = () => {
  const [projects] = useState([
    { id: 1, name: 'Project Alpha', status: 'In Progress', lastUpdated: '2 hours ago' },
    { id: 2, name: 'Project Beta', status: 'Completed', lastUpdated: '1 day ago' },
    { id: 3, name: 'Project Gamma', status: 'Pending', lastUpdated: '3 days ago' },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative bg-cover bg-center h-64" style={{ backgroundImage: "url('/src/assets/images/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Welcome to SVRALABS</h1>
            <p className="text-xl">Streamline your development workflow</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link to="/projects/new" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <Plus className="h-8 w-8 text-blue-500 mr-4" />
              <div>
                <h3 className="font-semibold">New Project</h3>
                <p className="text-sm text-gray-500">Create a new project</p>
              </div>
            </div>
          </Link>
          <Link to="/projects" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <Folder className="h-8 w-8 text-green-500 mr-4" />
              <div>
                <h3 className="font-semibold">Projects</h3>
                <p className="text-sm text-gray-500">View all projects</p>
              </div>
            </div>
          </Link>
          <Link to="/documents" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-purple-500 mr-4" />
              <div>
                <h3 className="font-semibold">Documents</h3>
                <p className="text-sm text-gray-500">Manage documents</p>
              </div>
            </div>
          </Link>
          <Link to="/settings" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <Settings className="h-8 w-8 text-yellow-500 mr-4" />
              <div>
                <h3 className="font-semibold">Settings</h3>
                <p className="text-sm text-gray-500">Configure settings</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Recent Projects */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Recent Projects</h2>
          <Link to="/projects" className="text-blue-500 flex items-center">
            View All <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Updated</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {projects.map((project) => (
                <tr key={project.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{project.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                      project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.lastUpdated}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Link to={`/projects/${project.id}`} className="text-blue-600 hover:text-blue-900">View</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl text-gray-600 mb-8">Join thousands of developers who are already using SVRALABS to streamline their workflow.</p>
          <div className="flex justify-center space-x-4">
            <Link to="/signup" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Sign Up
            </Link>
            <Link to="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium border border-blue-600 hover:bg-blue-50 transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
