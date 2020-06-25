// @flow 
import * as React from 'react';
import Head from 'next/head';

import Navegacion from './Navegacion';
const Layout = (props) => {
    return (

        <div>
            <Head>
                <title>Task-App</title>
                <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/cyborg/bootstrap.min.css" rel="stylesheet" integrity="sha384-GKugkVcT8wqoh3M8z1lqHbU+g6j498/ZT/zuXbepz7Dc09/otQZxTimkEMTkRWHP" crossorigin="anonymous"></link>
            </Head>
            <Navegacion/> 
            <div className="container p-4">
                {props.children}
            </div>   
        </div>
    );
};

export default Layout;