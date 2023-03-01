import axios from 'axios';
import makeRequest from '..';
import {
  BACKEND_URL,
  GET_DATA_URL,
  UPDATE_DATA_URL,
} from '../../../constant/apiEndPoints';
import AUTHORIZATION_TOKEN from '../../../constant/authorizationToken';
import { ERROR_ROUTE } from '../../../constant/routes';
import mockData from '../../../mocks/mockData';

jest.mock('axios');

describe('makeRequest', () => {
  const mockId = 1;
  const mockedAxios = axios;
  const mockNavigate = jest.fn();
  afterEach(() => {
    jest.clearAllMocks();
  });
  //
  it('should make API call with appropriate request options and return response body when only endpoint is specified', async () => {
    mockedAxios.mockResolvedValueOnce({
      data: mockData,
    });
    expect(mockedAxios).not.toHaveBeenCalled();
    const response = await makeRequest(GET_DATA_URL, mockNavigate);
    expect(mockedAxios).toHaveBeenCalledTimes(1);
    expect(mockedAxios).toHaveBeenCalledWith({
      baseURL: BACKEND_URL,
      url: GET_DATA_URL.url,
      method: 'get',
      headers: {
        authorization: `Bearer ${AUTHORIZATION_TOKEN}`,
      },
    });
    expect(response).toEqual(mockData);
  });
  //
  it('should make API call with appropriate request options and return response body when both endpoint and request body are specified', async () => {
    mockedAxios.mockResolvedValueOnce({
      data: {},
    });
    expect(mockedAxios).not.toHaveBeenCalled();
    const response = await makeRequest(UPDATE_DATA_URL(mockId), mockNavigate, {
      data: {},
    });
    expect(mockedAxios).toHaveBeenCalledTimes(1);
    expect(mockedAxios).toHaveBeenCalledWith({
      baseURL: BACKEND_URL,
      url: UPDATE_DATA_URL(mockId).url,
      method: 'patch',
      headers: {
        authorization: `Bearer ${AUTHORIZATION_TOKEN}`,
      },
      data: {},
    });
    expect(response).toEqual({});
  });
  it('should navigate to error page with status code when API call returns error status code', async () => {
    mockedAxios.mockRejectedValueOnce({ response: { status: 500 } });
    expect(mockNavigate).not.toBeCalled();
    await makeRequest(UPDATE_DATA_URL(mockId), mockNavigate, {
      data: {},
    });
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith(`${ERROR_ROUTE}/500`);
  });
  it('should navigate to error page without status code when API call returns error without status code', async () => {
    mockedAxios.mockRejectedValueOnce({});
    expect(mockNavigate).not.toBeCalled();
    await makeRequest(UPDATE_DATA_URL(mockId), mockNavigate, {
      data: {},
    });
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith(ERROR_ROUTE);
  });
});
