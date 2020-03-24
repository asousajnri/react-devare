import api from '../services/api';

const loadRecipes = async token => {
  try {
    const response = await api.get('api/v1/recipe', {
      headers: {
        Authorization: `Token ${token}`,
      },
    });

    return response.data;
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

export default loadRecipes;
