// Coloque aqui suas actions
export const GET_USER = 'GET_USER';

const getUser = (email) => ({
  type: GET_USER,
  email,
});

export default getUser;
