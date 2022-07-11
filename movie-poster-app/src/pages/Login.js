import React from "react";
import { Helmet } from 'react-helmet-async';
import axios from "axios"
import Nav from '../components/Nav';

const Login = () => {
    return(
        <div>
            <Helmet>
                <style>{"body { background-color: white; }"}</style>
            </Helmet>
            <Nav />
        </div>
    )
}

export default Login;

const styles = {

}