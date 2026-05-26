// CREATE
export const addUser = (user) => {
  return {
    type: "ADD_USER",
    payload: user,
  };
};

// DELETE
export const deleteUser = (id) => {
  return {
    type: "DELETE_USER",
    payload: id,
  };
};

// UPDATE
export const updateUser = (user) => {
  return {
    type: "UPDATE_USER",
    payload: user,
  };
};