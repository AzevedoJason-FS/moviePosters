import React from 'react'
import { Link } from 'react-router-dom'

const MiddleNav = () => {
    return(
        <nav style={styles.nav}>
            <div className='nav-links' style={styles.navLinks}>
                <Link to="/original-posters" style={styles.link}> Suggested</Link>
                <Link to="/collections" style={styles.link}> Top Selling</Link>
                <Link to="/collections" style={styles.link}> Originals</Link>
                <Link to="/framing" style={styles.link}> Action</Link>
                <Link to="/framing" style={styles.link}> Horror</Link>
                <Link to="/framing" style={styles.link}> Comics</Link>
                <Link to="/framing" style={styles.link}> Romance</Link>
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
    }
}