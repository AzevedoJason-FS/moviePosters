import React from 'react'
import { IoGrid, IoSearch, } from "react-icons/io5";
import { Link } from 'react-router-dom'

const Nav = () => {
    return(
        <nav className='nav'>
            <Link to="/"><IoGrid style={styles.icon}/> Home</Link>
            <Link to="/detail"><IoSearch style={styles.icon}/> Detail</Link>
        </nav>
    )
}

export default Nav;

const styles = {
    icon: {
        fontSize: '24px',
        padding: '0 8px 0 0'
    }
}

