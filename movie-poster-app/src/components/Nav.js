import React from 'react'
import { RiMovie2Line } from "react-icons/ri";
import { Link } from 'react-router-dom'

const Nav = () => {
    return(
    <div style={styles.navBox}>
        <nav className='nav' style={styles.nav}>
            <div className='title' style={styles.title}>
                <RiMovie2Line style={styles.icon}/><a href="/" style={styles.a}><h2 style={styles.title_h2}>movieposters.com</h2></a>
            </div>
            <div className='nav-links' style={styles.navLinks}>
                <Link to="/original-posters" style={styles.link}> ORIGINAL POSTERS</Link>
                <Link to="/collections" style={styles.link}> POSTERS</Link>
                <Link to="/collections" style={styles.link}> COLLECTIONS</Link>
                <Link to="/framing" style={styles.link}> FRAMING</Link>
            </div>
        </nav>
    </div>
    )
}

export default Nav;

const styles = {
    icon: {
        fontSize: '40px',
        padding: '0 8px 0 0',
        color: 'white'
    },

    navBox: {
        width: '80%',
        margin: 'auto',
        maxWidth: '1920px'
    },

    nav: {
        background: 'red',
        position: 'relative',
        width: '100%',
        transition: 'transform .25s cubic-bezier(.46, .01, .32,1)',
        height: '5rem',
        display: 'flex',
        justifyContent: 'space-between'
    },

    navLinks: {
        marginRight: '2rem',
        position: 'absolute',
        right: '0',
        display: 'flex',
        height: 'inherit',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },

    title:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '2rem'
    },

    a:{
        textDecoration: 'none'
    },

    title_h2:{
        fontSize: '2.7rem',
        color: 'white'
    },

    link: {
        marginRight: '2rem',
        fontWeight: 'bold',
        color: 'white',
        textDecoration: 'none',
        fontSize: '1.2rem'
    }
}

