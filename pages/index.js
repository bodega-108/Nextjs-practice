import Layout from '../components/Layout';
import fetch from 'isomorphic-fetch';
import User from '../components/Users'; 

export default function Home(props) {
  console.log(props)
  return (
    <Layout>
      <h1>Next.js</h1>
      <User 
        users = {props.users}
      />
    </Layout>
  )
}

Home.getInitialProps = async (ctx)=>{
  const res = await fetch('https://reqres.in/api/users');
  const resJson = await res.json();
  return {users :resJson.data}
}
