import { rest } from 'msw';
import { getProjects, getMetrics, getTeamMembers } from '../services/mockDataService';

export const handlers = [
  rest.get('/api/projects', (req, res, ctx) => {
    const filters = req.url.searchParams.get('filters') ? JSON.parse(req.url.searchParams.get('filters')) : null;
    const sortBy = req.url.searchParams.get('sortBy');
    const sortOrder = req.url.searchParams.get('sortOrder');
    const page = parseInt(req.url.searchParams.get('page')) || 1;
    const pageSize = parseInt(req.url.searchParams.get('pageSize')) || 10;

    const projects = getProjects(filters, sortBy, sortOrder, page, pageSize);
    return res(
      ctx.status(200),
      ctx.json({
        data: projects,
        total: projects.length,
        page,
        pageSize,
      })
    );
  }),

  rest.get('/api/metrics', (req, res, ctx) => {
    const filters = req.url.searchParams.get('filters') ? JSON.parse(req.url.searchParams.get('filters')) : null;
    const sortBy = req.url.searchParams.get('sortBy');
    const sortOrder = req.url.searchParams.get('sortOrder');
    const page = parseInt(req.url.searchParams.get('page')) || 1;
    const pageSize = parseInt(req.url.searchParams.get('pageSize')) || 10;

    const metrics = getMetrics(filters, sortBy, sortOrder, page, pageSize);
    return res(
      ctx.status(200),
      ctx.json({
        data: metrics,
        total: metrics.length,
        page,
        pageSize,
      })
    );
  }),

  rest.get('/api/team-members', (req, res, ctx) => {
    const filters = req.url.searchParams.get('filters') ? JSON.parse(req.url.searchParams.get('filters')) : null;
    const sortBy = req.url.searchParams.get('sortBy');
    const sortOrder = req.url.searchParams.get('sortOrder');
    const page = parseInt(req.url.searchParams.get('page')) || 1;
    const pageSize = parseInt(req.url.searchParams.get('pageSize')) || 10;

    const teamMembers = getTeamMembers(filters, sortBy, sortOrder, page, pageSize);
    return res(
      ctx.status(200),
      ctx.json({
        data: teamMembers,
        total: teamMembers.length,
        page,
        pageSize,
      })
    );
  }),
];
