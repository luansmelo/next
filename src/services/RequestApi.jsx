import axios from "axios";

export const getUsers = async () => {
  try {
    const { data } = await axios.get(
      "https://60831bd35dbd2c001757b2c7.mockapi.io/api/users"
    );
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export const createUser = async ({ name, avatar, createdAt }) => {
  try {
    const body = {
      name,
      avatar,
      createdAt,
    };

    const { data } = await axios.post(
      "https://60831bd35dbd2c001757b2c7.mockapi.io/api/users",
      body
    );

    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export const getUserById = async (id) => {
  try {
    const { data } = await axios.get(
      `https://60831bd35dbd2c001757b2c7.mockapi.io/api/users/${id}`
    );
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export const deleteUser = async (id) => {
  try {
    const { data } = await axios.delete(
      `https://60831bd35dbd2c001757b2c7.mockapi.io/api/users/${id}`
    );

    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export const editUserProfile = async ({ id, name, avatar }) => {
  try {
    const body = {
      id,
      name,
      avatar,
    };

    const { data } = await axios.put(
      `https://60831bd35dbd2c001757b2c7.mockapi.io/api/users/${id}`,
      body
    );

    return data;
  } catch (err) {
    throw new Error(err);
  }
};
