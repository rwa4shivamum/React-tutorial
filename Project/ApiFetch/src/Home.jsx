import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const Home = () => {
  const [data, setData] = useState([]);
  const apiFetchc = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=12&skip=150", {
      method: "GET",
    });
    const result = res.json();
    return result;
  };
  useEffect(() => {
    apiFetchc()
      .then((data) => setData(data.products))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div style={{display:"grid", gridTemplateColumns:"auto auto auto auto", gap:"20px", justifyContent:"center"}}>
      {data.map((ele) => (
        <div className="card" style={{width:"18rem"}} key={ele.id}>
          <img src={ele.thumbnail} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{ele.title}</h5>
            <p className="card-text">
              {ele.description}
            </p>
            <Link to={`/view/${ele.id}`}>View Details</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
