import { useNavigate } from 'react-router-dom';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const useApi = () => {
  const navigate = useNavigate();

  const handleResponse = async (response) => {
    if (!response.ok) {
      if (response.status === 401 || response.status === 403) {
        navigate('/login');
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  };

  const request = async (method, endpoint, data = null) => {
    const headers = {
      'Content-Type': 'application/json',
    };

    const token = localStorage.getItem('token');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const config = {
      method,
      headers,
    };

    if (data) {
      config.body = JSON.stringify(data);
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    return handleResponse(response);
  };

  const get = (endpoint) => request('GET', endpoint);
  const post = (endpoint, data) => request('POST', endpoint, data);
  const put = (endpoint, data) => request('PUT', endpoint, data);
  const del = (endpoint) => request('DELETE', endpoint);

  return { get, post, put, del };
};

export default useApi;
