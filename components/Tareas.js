import  Router  from "next/router";


const Tareas = ({tareas,eliminatTareas,editarTareas})=>{
   
    
    return(
        <div className="container">
            <h3>Listado de Tareas</h3>
            <ul className="list-group">
                {tareas.map(tarea=>(
                     <li className="list-group-item d-flex justify-content-between align-items-center" key={tarea._id}>
                     <div>
                        <h5>Tarea: {tarea.nombre}</h5>
                        <p>Prioridad: {tarea.prioridad}</p>
                        <button className="btn btn-primary ml-1" onClick={e =>Router.push('/task/[id]',`/task/${tarea._id}`)}><i class="fas fa-info-circle"></i></button>
                        <button className="btn btn-primary ml-1" onClick={()=> eliminatTareas(tarea._id)}><i className="fas fa-trash-alt"></i></button>
                        <button className="btn btn-primary ml-1" onClick={()=> editarTareas(tarea._id)}><i className="fas fa-edit"></i></button>

                         </div>
                 </li>
                ))}
               
            </ul>
        </div>
    )
}
export default Tareas;