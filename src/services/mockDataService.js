const projects = [
  { id: 1, name: 'Project Alpha', status: 'Active', progress: 75, teamSize: 5, startDate: '2023-01-15', endDate: '2023-06-30' },
  { id: 2, name: 'Project Beta', status: 'On Hold', progress: 30, teamSize: 3, startDate: '2023-02-20', endDate: '2023-07-15' },
  { id: 3, name: 'Project Gamma', status: 'Completed', progress: 100, teamSize: 7, startDate: '2022-11-05', endDate: '2023-03-20' },
  { id: 4, name: 'Project Delta', status: 'Active', progress: 60, teamSize: 4, startDate: '2023-03-10', endDate: '2023-08-25' },
  { id: 5, name: 'Project Epsilon', status: 'Cancelled', progress: 20, teamSize: 2, startDate: '2023-04-01', endDate: '2023-09-15' },
];

const metrics = [
  { id: 1, name: 'Code Coverage', value: 85, unit: '%', trend: 'up' },
  { id: 2, name: 'Bug Rate', value: 12, unit: 'issues/1k LOC', trend: 'down' },
  { id: 3, name: 'Deployment Frequency', value: 14, unit: 'deploys/day', trend: 'up' },
  { id: 4, name: 'Lead Time', value: 4.2, unit: 'days', trend: 'down' },
  { id: 5, name: 'Mean Time to Recovery', value: 1.8, unit: 'hours', trend: 'down' },
];

const teamMembers = [
  { id: 1, name: 'John Doe', role: 'Senior Developer', projects: 3, lastActive: '2023-05-20' },
  { id: 2, name: 'Jane Smith', role: 'UX Designer', projects: 2, lastActive: '2023-05-18' },
  { id: 3, name: 'Mike Johnson', role: 'DevOps Engineer', projects: 4, lastActive: '2023-05-22' },
  { id: 4, name: 'Sarah Williams', role: 'QA Engineer', projects: 2, lastActive: '2023-05-19' },
  { id: 5, name: 'David Brown', role: 'Product Manager', projects: 3, lastActive: '2023-05-21' },
];

const applyFilters = (data, filters) => {
  if (!filters) return data;
  return data.filter(item => {
    return Object.entries(filters).every(([key, value]) => {
      if (typeof value === 'string') {
        return item[key].toLowerCase().includes(value.toLowerCase());
      }
      return item[key] === value;
    });
  });
};

const applySort = (data, sortBy, sortOrder) => {
  if (!sortBy) return data;
  return [...data].sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return sortOrder === 'asc' ? -1 : 1;
    if (a[sortBy] > b[sortBy]) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });
};

const applyPagination = (data, page, pageSize) => {
  const startIndex = (page - 1) * pageSize;
  return data.slice(startIndex, startIndex + pageSize);
};

export const getProjects = (filters, sortBy, sortOrder, page, pageSize) => {
  let result = applyFilters(projects, filters);
  result = applySort(result, sortBy, sortOrder);
  return applyPagination(result, page, pageSize);
};

export const getMetrics = (filters, sortBy, sortOrder, page, pageSize) => {
  let result = applyFilters(metrics, filters);
  result = applySort(result, sortBy, sortOrder);
  return applyPagination(result, page, pageSize);
};

export const getTeamMembers = (filters, sortBy, sortOrder, page, pageSize) => {
  let result = applyFilters(teamMembers, filters);
  result = applySort(result, sortBy, sortOrder);
  return applyPagination(result, page, pageSize);
};
