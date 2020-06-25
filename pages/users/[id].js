import {useRouter} from 'next/router';
import fetch from 'isomorphic-fetch';
import Layout from '../../components/Layout';

const UserProfile = (props) =>{
   
    
   const router = useRouter();
   const {id} = router.query;
    
   return(
            <Layout>
                <div className="row">
                    <div className="col-md-6  offset-md-3">
                        <div className="card">
                            <div className="card-header text-center">
                                <img src={props.user.avatar} style={{borderRadius:'50%'}}></img>
                            </div>
                            <div className="card-body text-center">
                                <h3>
                                    {props.user.id}. {props.user.first_name} {props.user.last_name}
                                </h3>
                                <p>{props.user.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
}
UserProfile.getInitialProps = async (ctx) =>{
    console.log(ctx.query.id);
    const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`);
    const respoUser = await res.json();
    console.log(respoUser);
    return{user: respoUser.data}
}

export default UserProfile;