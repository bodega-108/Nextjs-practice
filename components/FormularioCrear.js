import React,{Fragment, useState} from 'react';
import Error from '../components/Error';


const FormularioCrear = ({tareas,statePrincipal,guardarStatePrincipal}) =>{
    
    console.log(statePrincipal);
    //State de nueva tarea
    const[nuevaTarea, guardarNuevaTarea]= useState({
        nombre:'',
        prioridad:''
    });
    const [error, guardarError] = useState(false);
    const[activar, guardarActivar] = useState(false)

    const {nombre,prioridad} = nuevaTarea;

    // Funcion que tome las tareas actuales y agregue la nueva 

    // Funcion para cuando el usuario escribre en el formulario
    const handleChange = e=>{

        guardarNuevaTarea({
            ...nuevaTarea,
            [e.target.name]:e.target.value
        })

    }
    // Funcion para activar el formulario
    const activarCrear = () =>{
        guardarActivar(true);
    }

    // Funcion cuando el usuario presion submit

    const submitNuevaTarea = async e =>{
        e.preventDefault();

        // Validación 
        if(nombre.trim() === '' || prioridad === ''){
            guardarError(true);
            return;
        }

        // Guardar en base de datos
        fetch(`http://localhost:3030/api/task`, {
            method: 'POST', // or 'PUT'
            body:JSON.stringify(nuevaTarea), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => console.log('Success:', response));

        // Reiniciar Formulario
        guardarNuevaTarea({
            nombre:'',
            prioridad:''
        })

        guardarStatePrincipal({
            ...statePrincipal,
            nuevaTarea
        })
          console.log('enviado form');
    }


    return (
            <Fragment>

                { activar ? 
                     <div className="container">
                     <form 
                         onSubmit={submitNuevaTarea}
                     
                     >
                         {error ? <Error /> : null}
                         <div className="form-group">
                             <label htmlFor="exampleInputEmail1">Nombre de tarea</label>
                             <input 
                             type="text" 
                             className="form-control" 
                             id="exampleInputEmail1" 
                             aria-describedby="emailHelp"
                             name="nombre"
                             onChange={handleChange}
                             value={nombre}
                             />
                         </div>

                         <div className="form-group">
                             
                             <label for="exampleFormControlSelect1">Example select</label>
                             <select 
                             name="prioridad"
                             onChange={handleChange}
                             value={prioridad}
                             className="form-control" id="exampleFormControlSelect1"
                             >
                                 <option> --Selecciones-- </option>
                                 <option>Urgente</option>
                                 <option>Alta</option>
                                 <option>Normal</option>
                                 <option>Baja</option>
                          </select>
                         
                         </div>
                     <button type="submit" className="btn btn-primary">Añadir Tarea</button>
                     </form>
                 </div>
                : <button
                          className="btn btn-primary"
                          onClick={()=>activarCrear()}

                          >Añadir nueva TareA</button>}
               
            </Fragment>

    )
}
export default FormularioCrear;