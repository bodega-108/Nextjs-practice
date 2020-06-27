// @flow 
import * as React from 'react';
import Head from 'next/head';

import Navegacion from './Navegacion';
const Layout = (props) => {
    return (

        <div>
            <Head>
                <title>Task-App</title>
                <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/united/bootstrap.min.css" rel="stylesheet" integrity="sha384-Uga2yStKRHUWCS7ORqIZhJ9LIAv4i7gZuEdoR1QAmw6H+ffhcf7yCOd0CvSoNwoz" crossorigin="anonymous"></link>
                <script src="https://kit.fontawesome.com/eaac39fae9.js" crossorigin="anonymous"></script>
            </Head>
            <Navegacion/> 
            <div className="container p-4">
                {props.children}
            </div>   
        </div>
    );
};

export default Layout;