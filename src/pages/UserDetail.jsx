import {useParams,useNavigate} from "react-router-dom"
import {useEffect,useState} from "react"
import "../App.css"

function UserDetail(){

const {id}=useParams()

const navigate=useNavigate()

const [user,setUser]=useState(null)

useEffect(()=>{

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

.then(res=>res.json())

.then(data=>setUser(data))

},[id])


if(!user) return <h2>Loading...</h2>

return(

<div className="detail">



<h2 className="heading">{user.name}</h2>

<div className="para">
    <p>Email: {user.email}</p>

<p>Phone: {user.phone}</p>

<p>Website: {user.website}</p>

<p>Company: {user.company?.name}</p>

<p>City: {user.address?.city}</p>
</div>

<button
className="backBtn"
onClick={()=>navigate("/")}
>
Back
</button>
</div>

)

}

export default UserDetail
