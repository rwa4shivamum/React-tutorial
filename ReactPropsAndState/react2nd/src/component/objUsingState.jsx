import { useState } from "react";

export function ObjState() {
  const [obj, setObj] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setObj({...obj, [e.target.name]:e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", obj);

    setObj({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={obj.name}
        placeholder="Enter your name"
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        value={obj.email}
        placeholder="Enter your email"
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        value={obj.password}
        placeholder="Enter your password"
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}