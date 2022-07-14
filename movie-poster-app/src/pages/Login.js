import React from "react";
import { Helmet } from 'react-helmet-async';
import axios from "axios"
import Nav from '../components/Nav';
import Button from '../components/buttons/Button';
import Footer from '../components/Footer';
import GotMail from "../components/GotMail";

const Login = () => {
    return(
        <div>
            <Helmet>
                <style>{"body { background-color: white; }"}</style>
            </Helmet>
            <Nav />
            <div style={styles.main}>
                <div style={styles.formBox}>
                    <h2 style={styles.formTitle}>Login</h2>
                    <form style={styles.form}>
                        <input
                            className='input'
                            type="text"
                            name="name"
                            placeholder="Email"
                            value=''
                            onChange=''
                            style={styles.input}
                        />
                        <input
                            className='input'
                            type="text"
                            name="name"
                            placeholder="Password"
                            value=''
                            onChange=''
                            style={styles.inputBottom}
                        />
                        <div style={styles.buttonBox}>
                         <Button 
                            buttonTitle="SIGN IN"
                            style={styles.buttonSign}
                         />
                         <Button 
                            buttonTitle="JOIN NOW"
                            style={styles.buttonJoin}
                         />
                         </div>
                         <p style={styles.forgot}>Forgot your password?</p>
                    </form>
                </div>
            </div>
            <GotMail 
                banner={styles.banner}
                bannerTitle={styles.bannerTitle}
                bannerSubTitle={styles.bannerSubTitle}
                bannerInput={styles.bannerInput}
            />
            <Footer />
        </div>
    )
}

export default Login;

const styles = {
    main: {
        maxWidth: '1500px',
        margin: '4rem auto 8rem auto',
        position: 'relative',
        paddingBottom: '60px',
    },

    formTitle: {
        fontSize: '4.5rem',
        fontWeight: '800'
    },

    formBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '60%'
    },

    input: {
        borderBottom: '8px solid black',
        padding: '8px 10px',
        fontSize: '2.2rem',
        fontWeight: '800',
    },

    inputBottom: {
        borderBottom: '8px solid black',
        padding: '8px 10px',
        fontSize: '2.2rem',
        fontWeight: '800',
        marginTop: '2rem'
    },

    buttonBox: {
        margin: '4rem auto 1rem',
        
    },

    forgot: {
        textAlign: 'center'
    },

    buttonSign: {
        background: 'black',
        border: 'none',
        color: 'white',
        minWidth: '184px',
        height: '48px',
        fontSize: '24px',
        fontWeight: '700',
        marginRight: '1rem',
        cursor: 'pointer'
    },

    buttonJoin: {
        background: 'white',
        border: '4px solid black',
        minWidth: '184px',
        height: '48px',
        fontSize: '24px',
        fontWeight: '700',
        cursor: 'pointer'
    },

    banner: {
        display: 'flex',
        maxWidth: '1500px',
        margin: 'auto',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '4rem'
    },

    bannerTitle: {
        fontSize: '5rem',
        margin: '0'
    },

    bannerSubTitle: {
        fontSize: '1.5rem',
        margin: '.5rem auto'
    },

    bannerInput: {
        border: '4px solid black',
        width: '50%',
        fontSize: '2rem',
        padding: '5px',
        margin: '2rem auto'
    }
}