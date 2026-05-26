// Getting data from localStorage initially

const storedUsers =
  JSON.parse(localStorage.getItem("users")) || [];

const initialState = {
  users: storedUsers,
};

export const userReducer = (state = initialState, action) => {

  switch (action.type) {

    // ADD
    case "ADD_USER":

      const addData = [...state.users, action.payload];
      console.log(state,action.payload, "here from reducer", addData)
      localStorage.setItem(
        "users",
        JSON.stringify(addData)
      );

      return {
        ...state,
        users: addData,
      };

    // DELETE
    case "DELETE_USER":

      const filteredUsers = state.users.filter(
        (user) => user.id !== action.payload
      );

      localStorage.setItem(
        "users",
        JSON.stringify(filteredUsers)
      );

      return {
        ...state,
        users: filteredUsers,
      };

    // UPDATE
    case "UPDATE_USER":

      const updatedUsers = state.users.map((user) =>
        user.id === action.payload.id
          ? action.payload
          : user
      );

      localStorage.setItem(
        "users",
        JSON.stringify(updatedUsers)
      );

      return {
        ...state,
        users: updatedUsers,
      };

    default:
      return state;
  }
};