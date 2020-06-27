import {useState, useEffect} from 'react'
import Layout from '../components/Layout';
import fetch from 'isomorphic-fetch';
import Tareas from '../components/Tareas'; 
import FormularioCrear from '../components/FormularioCrear';
import Formulario from '../components/Formulario';

export default function Home({data}) {

  const[tareas, guardarTareas]=useState(data);
  
  const[editdelet, guardarEditdelet]=useState(false)
  const[identificador, guardarIdentificador]=useState()


  const crearTarea = tarea =>{
    guardarTareas([
      ...tareas,
      tarea
    ])
  }

  // Funcion para eliminar Tareas
  const eliminatTareas = async id =>{
  
    try {
      // Llamado a base de datos
      const res = await fetch(`http://localhost:3030/api/task/${id}`,{method:'DELETE'})
      const resJSON = await res.json();
      console.log(resJSON);

    } catch (error) {
        console.log(error)
    }

    console.log(tareas)
    const obtenidos = tareas.filter(tarea => tarea._id !== id);
    guardarTareas(obtenidos)
  }

  const editarTareas = id =>{
    guardarEditdelet(true)
    guardarIdentificador(id)
    console.log(identificador)
  }

  return (
    <Layout>
      <h1>Next.js</h1>

      <div className="container">
        <Tareas 
          tareas={tareas}
          crearTarea={crearTarea}
          eliminatTareas={eliminatTareas}
          editarTareas={editarTareas}
          guardarEditdelet={guardarEditdelet}
        />
      </div>
    <div className="container">
    
      {editdelet ? <Formulario 
                      identificador={identificador}
                    /> : <FormularioCrear
        crearTarea={crearTarea}
        editdelet={editdelet}
      /> }
      
    </div>
    </Layout>
  )
}

Home.getInitialProps = async (ctx)=>{
  const res = await fetch('http://localhost:3030/api/tasks');
  const resJson = await res.json();

  return {data:resJson.tasks}
}
