import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function FormPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    course: "",
    agree: false,
  });

  useEffect(() => {
    if (id !== undefined) {
      let users = JSON.parse(localStorage.getItem("users")) || [];
      if (users[id]) {
        setForm(users[id]);
      }
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    let data = JSON.parse(localStorage.getItem("users")) || []; //localstorage data collect
    console.log("here data from localstorage", data); //data = []
    if(id !== undefined){
      //update
      data[id] = form
    }else{
      //create
      data.push(form);
    }
    
    localStorage.setItem("users", JSON.stringify(data));
    navigate("/display");
  };

  return (
    <div>
      <h2>Form Page</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <br />

        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <br />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <br />

        <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
        <br />

        {/* Gender */}
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={form.gender === "Male"}
            onChange={handleChange}
          />{" "}
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={form.gender === "Female"}
            onChange={handleChange}
          />{" "}
          Female
        </label>
        <br />

        {/* Dropdown */}
        <select name="course" value={form.course} onChange={handleChange}>
          <option value="">Select Course</option>
          <option value="React">React</option>
          <option value="Node">Node</option>
        </select>
        <br />

        {/* Checkbox */}
        <label>
          <input type="checkbox" checked={form.agree} name="agree" onChange={handleChange} />
          Accept Terms
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
