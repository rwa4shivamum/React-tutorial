import { useState } from "react";
import { Link } from "react-router-dom";

//searching, sorting, pagination
export function DisplayPage () {
     const users = JSON.parse(localStorage.getItem("users")) || [];
     
     //search
     const [search, setSearch] = useState("");

     //sort State
     const [sort, setSort] = useState("");

     //pagination state
     console.log(users)
    return (
        <>
        <h1>All Users</h1>
        {users.map((item, index)=>(
            <div key={index}>
                <p>Name: {item.name}</p>
                <p>Gmail: {item.email}</p>
                <p>Password: {item.password}</p>
                <p>Phone: {item.phone}</p>
                <p>gender: {item.gender}</p>
                <p>Course: {item.course}</p>
                <p>Condtion: {item.agree}</p>
                <Link to={`/delete/${index}`}>Delete This User</Link>
                <Link to={`/edit/${index}`}>EditUser</Link>
            </div>
        ))}
        </>
    )
}