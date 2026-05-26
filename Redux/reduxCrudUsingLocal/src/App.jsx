import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  addUser,
  deleteUser,
  updateUser,
} from "./redux/actions";

export default function App() {

  const users = useSelector((state) => state.users);
  //console.log(users, "from App.jsx")
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const [editId, setEditId] = useState(null);

  // ADD OR UPDATE
  const handleSubmit = () => {

    if (!name) return;

    // UPDATE
    if (editId !== null) {

      dispatch(
        updateUser({
          id: editId,
          name: name,
        })
      );

      setEditId(null);

    } else {

      // ADD
      dispatch(
        addUser({
          id: Date.now(),
          name: name,
        })
      );
    }

    setName("");
  };

  // EDIT
  const handleEdit = (user) => {
    setName(user.name);
    setEditId(user.id);
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>CRUD Using Redux</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleSubmit}>
        {editId !== null ? "Update" : "Add"}
      </button>

      <hr />

      {
        users?.map((user, index) => (
          <div
            key={index}
            style={{
              marginBottom: "10px",
            }}
          >
            <span>{user.name}</span>

            <button
              onClick={() => handleEdit(user)}
            >
              Edit
            </button>

            <button
              onClick={() =>
                dispatch(deleteUser(user.id))
              }
            >
              Delete
            </button>
          </div>
        ))
      }

    </div>
  );
}