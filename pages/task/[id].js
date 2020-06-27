
import {useRouter} from 'next/router'
import fetch from 'isomorphic-fetch';
import Layout from '../../components/Layout';
import Formulario from '../../components/Formulario';

const DetalleTareaDetalle = ({tarea}) =>{
    
    const router = useRouter();
    const {id} = router.query
        console.log(id)    
    return(
        <Layout>
                 <div className="row">
                     <div className="col-md-6  offset-md-3">
                         <div className="card">
                             <div className="card-header text-center">
                                 Task
                             </div>
                             <div className="card-body text-center">
                                 <h3>
                                     Nombre: {tarea.nombre}. 
                                 </h3>
                                 <h4>prioridad: {tarea.prioridad}</h4>
                            </div>
                         

                         </div>
                     </div>
                 </div>
           
               
            </Layout>
    )
}
DetalleTareaDetalle.getInitialProps = async (ctx) =>{
    console.log(ctx.query.id);
    const res = await fetch(`http://localhost:3030/api/task/${ctx.query.id}`);
    const respoTarea = await res.json();
    console.log(respoTarea);
    return{tarea:respoTarea.task}
}
export default DetalleTareaDetalle;