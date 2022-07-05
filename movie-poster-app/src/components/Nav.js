import React from 'react'
import { IoGrid, IoSearch, } from "react-icons/io5";
import { Link } from 'react-router-dom'

const Nav = () => {
    return(
        <nav className='nav' style={styles.nav}>
            <div className='nav-links' style={styles.navLinks}>
                <Link to="/"><IoGrid style={styles.icon}/> Home</Link>
                <Link to="/detail"><IoSearch style={styles.icon}/> Detail</Link>
                <Link to="/products"><IoSearch style={styles.icon}/> Products</Link>
            </div>
            
        </nav>
    )
}

export default Nav;

const styles = {
    icon: {
        fontSize: '24px',
        padding: '0 8px 0 0'
    },

    nav: {
        background: 'black',
        position: 'relative',
        width: '100%',
        transition: 'transform .25s cubic-bezier(.46, .01, .32,1)',
        height: '5rem'
    },

    navLinks: {
        background: 'red',
        width: '40%',
        position: 'absolute',
        right: '0',
        display: 'flex',
        height: 'inherit'
    }
}

