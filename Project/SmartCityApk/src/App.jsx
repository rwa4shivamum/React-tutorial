import { useState, useEffect } from "react";

export default function App() {
  const [cities, setCities] = useState([]);
  const [form, setForm] = useState({ name: "", state: "", country: "" });
  const [search, setSearch] = useState("")
  
  useEffect(()=>{
    const obj = [
      {id:Date.now(), name:"ahemadabad", state:"gujrat", country:"India"},
      {id:Date.now(), name:"Bhopal", state:"Madhya Pradesh", country:"India"}
    ]
    setCities([...cities, ...obj])
  },[])
  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add city
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCity = {
      id: Date.now(),
      ...form
    };
    setCities([...cities, newCity]);
    console.log(cities)
    setForm({ name: "", state: "", country: "" });
  };
  console.log(search)
  const filteredCity = cities.filter((city)=>{
    city.name.toLowerCase().includes(search.toLowerCase())
  })
  console.log(filteredCity)
  return (
    <div style={{ padding: "20px" }}>
      <h1>Smart City Manager</h1>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="City Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={form.state}
          onChange={handleChange}
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={form.country}
          onChange={handleChange}
        />
        <button type="submit">Add City</button>
      </form>

      {/* Search */}
      <input
        type="text"
        placeholder="Search city..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginTop: "10px" }}
      />

      {/* City List */}
      
      {cities.map((item, index)=>(
        <div key={index} style={{}}>
          <p>City:{item.name}</p>
          <p>State:{item.state}</p>
          <p>Country:{item.country}</p>
        </div>
      ))}

      {/* City Details */}
    
    </div>
  );
}
