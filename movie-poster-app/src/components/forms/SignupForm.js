import React from "react";
import axios from "axios"
import Button from '../buttons/Button'
import { Link } from 'react-router-dom'

const SignupForm = () => {

    const [formValue, setformValue] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });
    
    const [loggedIn, setLogin] = React.useState(false)

    const handleChange = (e) => {
      setformValue({
        ...formValue,
        [e.target.name]: e.target.value
      });
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
    
        const baseURL = "/users/signup";
        axios.post(baseURL, {
            firstName: formValue.firstName,
            lastName: formValue.lastName,
            email: formValue.email,
            password: formValue.password
        })
            .then((response) => {
               console.log(response.data)
               setLogin(true)
               window.location = "/account";
            }).catch(err => {
                if (err.response && err.response.status === 406){
                    console.clear()
                }
            })
        }

    return(
        <form style={styles.form} onSubmit={handleSubmit} >
            <input
            className='input'
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formValue.firstName}
            onChange={handleChange}
            style={styles.input}
        />
        <input
           className='input'
           type="text"
           name="lastName"
           placeholder="Last Name"
           value={formValue.lastName}
           onChange={handleChange}
           style={styles.input}
        />
        <input
            className='input'
            type="text"
            name="email"
            placeholder="Email"
            value={formValue.email}
            onChange={handleChange}
            style={styles.input}
        />
        <input
            className='input'
            type="text"
            name="password"
            placeholder="Password"
            value={formValue.password}
            onChange={handleChange}
            style={styles.input}
        />
        <div style={styles.buttonBox}>
         <Button 
            buttonTitle="JOIN NOW"
            style={styles.buttonSign}
         />
         <div style={styles.buttonJoin}>
         <Link to="/login" style={styles.buttonJoinStyle}>SIGN IN</Link>
         </div>
         </div>
         <p style={styles.forgot}>Forgot your password?</p>
    </form>
 
    )
}

export default SignupForm;

const styles = {

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
        marginTop: '2rem'
    },

    buttonBox: {
        margin: '4rem auto 1rem',
        display: 'flex',
        flexDirection: 'row'
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
        height: '40px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonJoinStyle: {
        fontSize: '24px',
        fontWeight: '700',
        textDecoration: 'none',
        color: 'black',
        padding: '8px 48px'
    }
}