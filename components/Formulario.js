import React,{useState, Fragment} from 'react';
import Error from './Error';
import Router from 'next/router';

const Formulario = ({identificador})=>{
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

        // Validaciones
        if(nombre.trim() === '' || prioridad ===''){
            guardarError(true);
            return;
        }
        // Guardar en base de datos
        fetch(`http://localhost:3030/api/task/${identificador}`,{
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

    return (
        <Fragment>
            
            <div>
                <h3>Editar Tarea</h3>
                <form
                    onSubmit={submitCita}
                >
                <div 
                className="form-group">
                <label htmlFor="exampleInputEmail1">Nombre</label>
                <input 
                    type="text"
                    name="nombre" 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp"
                    onChange={handleChange}
                    value={nombre}
                    />
                </div>
                <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Prioridad</label>
                    <select
                        name="prioridad" 
                        className="form-control" 
                        id="exampleFormControlSelect1"
                        onChange={handleChange}
                        value={prioridad}>
                        <option>--Seleccione--</option>
                        <option>Urgente</option>
                        <option>Alta</option>
                        <option>Normal</option>
                        <option>Baja</option>
                    </select>
      </div>
                <button type="submit" con className="btn btn-primary">Editar</button>
            </form>
            </div>
        </Fragment>
        
        )
}
export default Formulario;