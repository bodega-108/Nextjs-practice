import {useState} from 'react'
import Layout from '../components/Layout';
import fetch from 'isomorphic-fetch';
import User from '../components/Users'; 
import FormularioCrear from '../components/FormularioCrear';

export default function Home({tareas}) {
 
  const[statePrincipal, guardarStatePrincipal]=useState([
    {nombre:"Eduardo",prioridad:"Alta"},
    {nombre:"Eduardo",prioridad:"Alta"}

  ]);


  return (
    <Layout>
      <h1>Next.js</h1>
      <User 
        tareas = {tareas}
      />
   <FormularioCrear
   guardarStatePrincipal = {guardarStatePrincipal}
   statePrincipal = {statePrincipal}
     tareas = {tareas}
   />
    </Layout>
  )
}

Home.getInitialProps = async (ctx)=>{
  const res = await fetch('http://localhost:3030/api/tasks');
  const resJson = await res.json();
  return {tareas:resJson.tasks}
}
