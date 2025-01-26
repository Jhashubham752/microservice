
// utils/api.js
import axios from 'axios';

const API_URL = process.env.API_URL; // Update with the backend API URL

// Get all users
export const getUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Get a single user by ID
export const getUserById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// Create a new user
export const createUser = async (user) => {
  const response = await axios.post(API_URL, user);
  return response.data;
};

// Update an existing user
export const updateUser = async (id, user) => {
  const response = await axios.put(`${API_URL}/${id}`, user);
  return response.data;
};

// Delete a user
export const deleteUser = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
