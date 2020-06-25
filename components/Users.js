import  Router  from "next/router";

const Users = ({tareas}) => {
    return(
        <ul className="list-group">
            {tareas.map(tarea=>(
        <li className="list-group-item d-flex justify-content-between align-items-center" >
            <div>
            <h5>{tarea.nombre} {tarea.prioridad}</h5>
            <button key={tarea._id} onClick={e =>Router.push('/task/[id]',`/task/${tarea._id}`)}> administrar</button>
            </div>
        </li>
        ))}
        </ul>
    )
}
export default Users;