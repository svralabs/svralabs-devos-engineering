export const api = {
  get: async (url) => ({ data: [] }),
  post: async (url, body) => ({ data: { success: true } }),
  put: async (url, body) => ({ data: { success: true } }),
  delete: async (url) => ({ data: { success: true } })
};
export default api;
