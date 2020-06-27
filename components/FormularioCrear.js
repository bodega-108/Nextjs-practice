
import React,{useState} from 'react'

const FormularioCrear = ({crearTarea})=>{
    // State para tarea
    const[tarea,guardarTarea]=useState({
        _id:'',
        nombre:'',
        prioridad:''
    });
    // State del error
    const[error,guardarError]=useState(false);

    const{nombre,prioridad}=tarea

    // Funcion para capturar cambios en el form
    const handleChange = e =>{
        
        guardarTarea({
            ...tarea,
            [e.target.name]:e.target.value
        });
    }

    // Funcion cuando el usuario presione submit
    const submitTarea = e =>{

        e.preventDefault();

        // Validar Formulario 
        if(nombre.trim() === '' || prioridad === ''){
            console.log('tamos mal');
            guardarError(true);
            return;
        }
        // Conexion a base de datos 
        var url = 'http://localhost:3030/api/task';
        
        fetch(url, {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(tarea), // data can be `string` or {object}!
          headers:{
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        // .then(response => console.log('Success:', response))
        .then(response => crearTarea(response.task))

        // crearTarea(tarea);

        // Recetear Formulario
        guardarTarea({
            nombre:'',
            prioridad:''
        })
    }
    //Funcion para actualizar Tareas
    
    
    return (
        <div>
            <h3>Añadir tarea</h3>
            <form onSubmit={submitTarea}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Tarea</label>
                    <input 
                        type="text" 
                        className="form-control"
                        name="nombre"
                        placeholder="Ej. Hacer Deploy en AWS"
                        onChange={handleChange}
                        value={nombre}
                        />
                </div>  
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Prioridad</label>
                    <select 
                        className="form-control" 
                        id="exampleFormControlSelect1"
                        name="prioridad"
                        onChange={handleChange}
                        value={prioridad}
                        >
                        <option>--Seleccione--</option>
                        <option>Urgente</option>
                        <option>Alta</option>
                        <option>Normal</option>
                        <option>Baja</option>
                    </select>
                </div>

   <button type="submit" className="btn btn-primary">Añadir</button>
      </form>
        </div>
    )
}

export default FormularioCrear;