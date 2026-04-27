"use client";

import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/js/bootstrap.bundle.js'

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    course: "",
    skills: [],
  })
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // console.log("here is my checkbox selected",type=="checkbox")
    if (type === "checkbox") {
      let updatedSkills = [...formData.skills];
      console.log("here is checking the checked",checked)
      if (checked){ 
        updatedSkills.push(value);
        console.log(checked, updatedSkills)
      }
      else{
         console.log(updatedSkills);
         console.log(value);
         updatedSkills = updatedSkills.filter((s) => s !== value);
      }

      setFormData({ ...formData, skills: updatedSkills });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    let err = {};

    if (!formData.name) err.name = "Required";
    if (!formData.email.includes("@")) err.email = "Invalid email";
    if (formData.password.length < 6) err.password = "Min 6 chars";
    if (formData.phone.length !== 10) err.phone = "10 digits only";
    if (!formData.gender) err.gender = "Select gender";
    if (!formData.course) err.course = "Select course";
    if (formData.skills.length === 0) err.skills = "Select skills";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (editIndex !== null) {
      const updated = [...users];
      updated[editIndex] = formData;
      setUsers(updated);
      setEditIndex(null);
    } else {
      setUsers([...users, formData]);
    }

    setFormData({
      name: "",
      email: "",
      password: "",
      phone: "",
      gender: "",
      course: "",
      skills: [],
    });

    setErrors({});
  };

  const handleDelete = (i) => {
    setUsers(users.filter((_, index) => index !== i));
  };

  const handleEdit = (i) => {
    setFormData(users[i]);
    setEditIndex(i);
  };

  return (
    <div className="container mt-5">
      <h2>{editIndex !== null ? "Update" : "Add"} User</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          className="form-control mb-1"
          value={formData.name}
          onChange={handleChange}
        />
        <span className="text-danger">{errors.name}</span>

        <input
          name="email"
          placeholder="Email"
          className="form-control mb-1"
          value={formData.email}
          onChange={handleChange}
        />
        <span className="text-danger">{errors.email}</span>

        <input
          name="password"
          placeholder="Password"
          className="form-control mb-1"
          value={formData.password}
          onChange={handleChange}
        />
        <span className="text-danger">{errors.password}</span>

        <input
          name="phone"
          placeholder="Phone"
          className="form-control mb-1"
          value={formData.phone}
          onChange={handleChange}
        />
        <span className="text-danger">{errors.phone}</span>

        {/* Gender */}
        <div>
          Gender:
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={handleChange}
            checked={formData.gender === "Male"}
          />{" "}
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={handleChange}
            checked={formData.gender === "Female"}
          />{" "}
          Female
        </div>
        <span className="text-danger">{errors.gender}</span>

        {/* Course */}
        <select
          name="course"
          className="form-control mt-2"
          value={formData.course}
          onChange={handleChange}
        >
          <option value="">Select Course</option>
          <option value="BCA">BCA</option>
          <option value="MCA">MCA</option>
        </select>
        <span className="text-danger">{errors.course}</span>

        {/* Skills */}
        <div className="mt-2">
          Skills:
          <input type="checkbox" value="HTML" onChange={handleChange} /> HTML
          <input type="checkbox" value="CSS" onChange={handleChange} /> CSS
          <input type="checkbox" value="JS" onChange={handleChange} /> JS
        </div>
        <span className="text-danger">{errors.skills}</span>

        <button className="btn btn-primary mt-3">
          {editIndex !== null ? "Update" : "Submit"}
        </button>
      </form>

      <table className="table mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Course</th>
            <th>Skills</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={i}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
              <td>{u.gender}</td>
              <td>{u.course}</td>
              <td>{u.skills.join(", ")}</td>
              <td>
                <button onClick={() => handleDelete(i)}>Delete</button>
                <button onClick={() => handleEdit(i)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}