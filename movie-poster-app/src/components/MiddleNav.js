import React from 'react'
import { Link } from 'react-router-dom'
import "../index";

const MiddleNav = () => {
    return(
        <nav style={styles.nav}>
            <div className='nav-links' style={styles.navLinks}>
                <Link to="/original-posters" style={styles.link} className='link'> Suggested</Link>
                <Link to="/collections" style={styles.link} className='link'> Top Selling</Link>
                <Link to="/collections" style={styles.link} className='link'> Originals</Link>
                <Link to="/framing" style={styles.link} className='link'> Action</Link>
                <Link to="/framing" style={styles.link} className='link'> Horror</Link>
                <Link to="/framing" style={styles.link} className='link'> Comics</Link>
                <Link to="/framing" style={styles.link} className='link'> Romance</Link>
            </div>
        </nav>
    )
}

export default MiddleNav;

const styles = {

    nav: {
        margin: '2rem auto'
    },

    navLinks: {
        display: 'flex',
        justifyContent: 'space-evenly',
    },

    link: {
        color: 'white',
        textDecoration: 'none',
        fontWeight: '800',
        fontSize: '2rem'
    },
}