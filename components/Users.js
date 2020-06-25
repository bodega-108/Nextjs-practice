import  Router  from "next/router";

const Users = (props) => {
    console.log(props)
    return(
        <ul className="list-group">
            {props.users.map(user=>(
        <li className="list-group-item d-flex justify-content-between align-items-center" key={user.id} onClick={e =>Router.push('/users/[id]',`/users/${user.id}`)}>
            <div>
            <h5>{user.first_name} {user.last_name}</h5>
            <p>{user.email}</p>
            </div>
            <img src={user.avatar} style={{borderRadius:'50%'}}></img>
            
        </li>
        ))}
        </ul>
    )
}
export default Users;