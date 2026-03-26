import {useNavigate} from "react-router-dom"
import "../App.css"

function UserCard({user}){

const navigate=useNavigate()

return(

<div

className="card"

onClick={()=>navigate(`/user/${user.id}`)}

>

<h3>{user.name}</h3>


<div className="para">
    <p>Email: {user.email}</p>
    <p>Phone: {user.phone}</p>
    <p>Company: {user.company?.name}</p>
</div>

</div>

)

}

export default UserCard