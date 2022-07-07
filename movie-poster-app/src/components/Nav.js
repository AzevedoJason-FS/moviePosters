import React from 'react'
import { RiMovie2Line, RiUserReceivedFill } from "react-icons/ri";
import { BiHeart } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from 'react-router-dom'

const Nav = () => {
    return(
    <div style={styles.navBox}>
        <nav className='nav' style={styles.nav}>
            <div className='title' style={styles.title}>
                <RiMovie2Line style={styles.logoIcon}/><a href="/" style={styles.a}><h2 style={styles.title_h2}>movieposters.com</h2></a>
            </div>
            <div className='nav-links' style={styles.navLinks}>
                <Link to="/original-posters" style={styles.link}> ORIGINAL POSTERS</Link>
                <Link to="/collections" style={styles.link}> POSTERS</Link>
                <Link to="/collections" style={styles.link}> COLLECTIONS</Link>
                <Link to="/framing" style={styles.link}> FRAMING</Link>
                <Link to="/wishlist" style={styles.link}><BiHeart style={styles.icon}/></Link>
                <Link to="/search" style={styles.link}> <AiOutlineSearch style={styles.icon}/></Link>
                <Link to="/login" style={styles.link}> <RiUserReceivedFill style={styles.icon}/></Link>
                <Link to="/cart" style={styles.link}>
                    <div style={styles.cartIcon}>
                        <h2 style={styles.cartNumber}>N</h2>
                    </div>
                </Link>
               
            </div>
        </nav>
    </div>
    )
}

export default Nav;

const styles = {
    icon: {
        fontSize: '30px',
        color: 'white'
    },

    logoIcon: {
        fontSize: '45px',
        color: 'white'
    },

    cartIcon: {
        width: '36px',
        height: '36px',
        background: 'white',
        borderRadius: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    cartNumber:{
        fontSize: '1rem',
        color: 'black'
    },

    navBox: {
        background: 'black'
    },

    nav: {
        margin: 'auto',
        maxWidth: '1500px',
        background: 'black',
        position: 'relative',
        width: '100%',
        transition: 'transform .25s cubic-bezier(.46, .01, .32,1)',
        height: '4.4rem',
        display: 'flex',
        justifyContent: 'space-between'
    },

    navLinks: {
        marginRight: '1rem',
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
        marginLeft: '1rem'
    },

    a:{
        textDecoration: 'none'
    },

    title_h2:{
        fontSize: '2.4em',
        color: 'white',
        fontWeight: 'bold',
        margin: 0
    },

    link: {
        marginRight: '1.4rem',
        fontWeight: 'bold',
        color: 'white',
        textDecoration: 'none',
        fontSize: '1.1rem'
    }
}

