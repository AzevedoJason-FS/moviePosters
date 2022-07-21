import React from "react";
import { Helmet } from 'react-helmet-async';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import GotMail from "../components/GotMail";
import SignupForm from "../components/forms/SignupForm";

const Register = () => {
    return(
        <div>
            <Helmet>
                <style>{"body { background-color: white; }"}</style>
            </Helmet>
            <Nav />
            <div style={styles.main}>
                <div style={styles.formBox}>
                    <h2 style={styles.formTitle}>Create Account</h2>
                    <SignupForm />
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

export default Register;

const styles = {
    main: {
        maxWidth: '1500px',
        margin: '4rem auto 6rem auto',
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
        alignItems: 'center',
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