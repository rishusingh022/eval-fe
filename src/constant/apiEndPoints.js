export const BACKEND_URL = 'http://localhost:8000/';

export const GET_DATA_URL = {
  url: 'api/events',
  method: 'get',
};

export const GET_DATA_BY_ID_URL = (id) => ({
  url: `api/events/${id}`,
  method: 'get',
});

export const UPDATE_DATA_URL = (id) => ({
  url: `api/events/${id}`,
  method: 'patch',
});
