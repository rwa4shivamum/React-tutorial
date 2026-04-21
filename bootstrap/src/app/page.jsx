"use client";

import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/js/bootstrap.bundle.js'
import { useEffect, useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(editIndex !== null){
      const updatedUsers = [...users];
      updatedUsers[editIndex] = formData;
      setUsers(updatedUsers);
      setEditIndex(null)
    }else{
      setUsers([...users, formData]);
    }

    setFormData({
      name: "",
      email: "",
      password: "",
      phone: "",
    });
    console.log(users)
  };
  const handleEdit = (index) => {
    setFormData(users[index]);
    setEditIndex(index);
  }
  const handleDelete = (index) => {
    const updatedUsers = users.filter((_,i)=> i !== index);
    setUsers(updatedUsers)
  }
  useEffect(()=>{
    console.log("users got Updated", users)
  },[users])
  return (
    <div className="contianer mt-5">
      <h2 className="mb-4 text-primary">Student Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="enter a name"
          value={formData.name}
          onChange={handleChange}
          className="form-control mb-2"
        />
        <input
          type="email"
          name="email"
          placeholder="enter a email"
          value={formData.email}
          onChange={handleChange}
          className="form-control mb-2"
        />
        <input
          type="password"
          name="password"
          placeholder="enter a password"
          value={formData.password}
          onChange={handleChange}
          className="form-control mb-2"
        />
        <input
          type="tel"
          name="phone"
          placeholder="enter a phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="form-control mb-2"
        />
        <button type="submit">{editIndex !== null ? "editButton" : "submit"}</button>
      </form>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Phone</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index)=>(
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.phone}</td>
              <td><button onClick={()=> handleEdit(index)}>Edit</button></td>
              <td><button onClick={()=> handleDelete(index)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
