import {useEffect,useState} from "react"
import UserCard from "../components/UserCard"
import SearchSort from "../components/SearchSort"
import Loader from "../components/Loader"
import "../App.css"

function Dashboard(){

const [users,setUsers]=useState([])
const [loading,setLoading]=useState(true)
const [error,setError]=useState("")
const [search,setSearch]=useState("")
const [sort,setSort]=useState(true)
const [view,setView]=useState("card")


useEffect(()=>{

fetch("https://jsonplaceholder.typicode.com/users")

.then(res=>{

if(!res.ok){

throw new Error()

}

return res.json()

})

.then(data=>{

setUsers(data)

setLoading(false)

})

.catch(()=>{

setError("Failed to fetch users")

setLoading(false)

})

},[])



const filteredUsers=users.filter(user=>

user.name.toLowerCase().includes(search.toLowerCase()) ||

user.email.toLowerCase().includes(search.toLowerCase())

)


const sortedUsers=[...filteredUsers].sort((a,b)=>{

return sort ?

a.name.localeCompare(b.name)

:

b.name.localeCompare(a.name)

})



if(loading) return <Loader/>

if(error) return <h2>{error}</h2>


return(

<div className="container">

<div className="navbar">

<h2>BuyerForeSight Dashboard</h2>

<div>

<button
className="viewBtn"
onClick={()=>setView("card")}
>
Cards
</button>

<button
className="viewBtn"
onClick={()=>setView("table")}
>
Table
</button>

</div>

</div>


<SearchSort
setSearch={setSearch}
setSort={setSort}
sort={sort}
/>


{sortedUsers.length===0 ?

<h3>No users found</h3>

:

view==="card"?

<div className="grid">

{sortedUsers.map(user=>(

<UserCard key={user.id} user={user}/>

))}

</div>

:

<table className="table">

<thead>

<tr>

<th>Name</th>
<th>Email</th>
<th>Phone</th>
<th>Company</th>

</tr>

</thead>

<tbody>

{sortedUsers.map(user=>(

<tr key={user.id}>

<td>{user.name}</td>
<td>{user.email}</td>
<td>{user.phone}</td>
<td>{user.company?.name}</td>

</tr>

))}

</tbody>

</table>

}

</div>

)

}

export default Dashboard