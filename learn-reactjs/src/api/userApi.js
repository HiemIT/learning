import axiosClient from './axiosClient';
const userApi = {
  required(data) {
    const url = '/auth/local/register';

    return axiosClient.post(url, data);
  },
  login(data) {
    const url = '/auth/local';

    return axiosClient.post(url, data);
  },
};

export default userApi;
