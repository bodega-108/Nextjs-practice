import React,{useState, Fragment} from 'react';
import Error from './Error';

const Formulario = ({id})=>{
    // state de formulario
    const[tarea,guardarTarea]=useState({
        nombre:'',
        prioridad:''
    });

    // activar
    const[activar, guardarActivar] = useState(false)
    // Error
    const [error, guardarError] = useState(false);

    //Funcion para activar el formulario de edicion
    const editarTarea = () =>{

        guardarActivar(true);
    }

    // Funcion que se ejecuca cada que un usuario escribe en un input
    const handleChange = e =>{
        guardarTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }

    const{nombre, prioridad} = tarea;

    // Cuando el usuario presiona guardar Cambios
    const submitCita =async e =>{
        e.preventDefault();

        // Validaciones
        if(nombre.trim() === '' || prioridad ===''){
            guardarError(true);
            return;
        }
        // Guardar en base de datos
        fetch(`http://localhost:3030/api/task/${id.id}`, {
            method: 'PUT', // or 'PUT'
            body:JSON.stringify(tarea), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => console.log('Success:', response));
        // Crear Alerta de exito

        // Reiniciar el formulario
        guardarTarea({
            nombre:'',
            prioridad:''
        })
        console.log('enviado form');


    }
    // Funcion si el usuario presiona eliminar
    const eliminarTarea= async e =>{
        
        // Eliminar de base de datos
         // Guardar en base de datos
         fetch(`http://localhost:3030/api/task/${id.id}`, {
            method: 'DELETE', // or 'PUT'
            body:JSON.stringify(tarea), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => console.log('Success:', response));
        // Crear Alerta de exito

        // Reiniciar el formulario
          
        console.log('enviado form');




    }
    return (
        <Fragment>
           

            {activar ?     
                <form 
                    onSubmit={submitCita}
                >
                    {error ? <Error/> : null}
                     <input 
                        type="text"
                        name="nombre"
                        placeholder="nombre de la tarea"
                        onChange={handleChange}
                        value={nombre}
                         />

                         <select 
                            name="prioridad"
                            onChange={handleChange}
                            value={prioridad}
                            >
                                <option> --Selecciones-- </option>
                                <option>Urgente</option>
                                <option>Alta</option>
                                <option>Normal</option>
                                <option>Baja</option>
                         </select>

                         <button className="btn btn-success" type="submit">Guardar Cambios</button>
                </form> : null
                }
         <button 
        className="btn btn-primary" 
        onClick={()=> editarTarea()}
        >Editar</button>
        
        <button 
            className="btn btn-danger"
            onClick={()=> eliminarTarea()}>Eliminar</button>
        </Fragment>
        
        )
}
export default Formulario;