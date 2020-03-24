import api from '../services/api';

const loadUser = async user => {
  try {
    const response = await api.post('authentication/', user);

    const {
      data: { id, name, image, token },
      status,
    } = response;

    return {
      status,
      id,
      name,
      image,
      token,
    };
  } catch (error) {
    if (error.response) {
      return {
        status: error.response.status,
      };
    }

    if (error.request) {
      return error.request;
    }

    return error.message;
  }
};

export default loadUser;
