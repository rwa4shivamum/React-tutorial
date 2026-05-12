import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"

export function DeletePage () {
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(()=> {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        // users = [{id=0}, {id=1}, {id=2}]
        //splice
        users.splice(id,1);//id=0 1 
        // users = [{id=1}, {id=2}]
        localStorage.setItem("users", JSON.stringify(users))
        navigate("/display")
    },[])
    return (
        <>
        <h1>Deleting....</h1>
        </>
    )
}