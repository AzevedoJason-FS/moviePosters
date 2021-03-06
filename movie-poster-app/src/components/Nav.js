import React from 'react'
import {useState} from 'react';
import { RiMovie2Line, RiUserReceivedFill, RiArrowDropDownLine } from "react-icons/ri";
import { BiHeart } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from 'react-router-dom'

const Nav = () => {

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(current => !current);
  };

    return(
    <div style={styles.navBox}>
        <nav className='nav' style={styles.nav}>
            <div className='title' style={styles.title}>
                <RiMovie2Line style={styles.logoIcon}/><a href="/" style={styles.a}><h2 style={styles.title_h2}>movieposters.com</h2></a>
            </div>
            <div className='nav-links' style={styles.navLinks}>
                <Link to="/original-posters" style={styles.link}> ORIGINAL POSTERS <RiArrowDropDownLine style={styles.dropDownMenuIcon}/> </Link>
                <Link to="/collections" style={styles.link}> POSTERS <RiArrowDropDownLine style={styles.dropDownMenuIcon}/> </Link>
                <Link to="/collections" style={styles.link}> COLLECTIONS <RiArrowDropDownLine style={styles.dropDownMenuIcon}/> </Link>
                <Link to="/framing" style={styles.link}> FRAMING</Link>
                <Link to="/wishlist" style={styles.linkIcon}><BiHeart style={styles.icon}/></Link>
                <button style={styles.button} onClick={handleClick}><AiOutlineSearch style={styles.icon}/></button>
                <Link to="/login" style={styles.linkIcon}> <RiUserReceivedFill style={styles.icon}/></Link>
                <Link to="/cart" style={{ marginRight: '0',fontWeight: 'bold',color: 'white',textDecoration: 'none',fontSize: '1.1rem'}}>
                    <div style={styles.cartIcon}>
                        <h2 style={styles.cartNumber}>N</h2>
                    </div>
                </Link>
               
            </div>
        </nav>
        <div className={isActive ? 'inputShow' : ''} style={styles.searchBox}>
            <div>
                <AiOutlineSearch style={styles.icon}/>
            </div>
                <input 
                style={styles.searchField} 
                placeholder={'Search'}
                className='searchField'
                />
        </div>
    </div>
    )
}

export default Nav;

const styles = {
    icon: {
        fontSize: '30px',
        color: 'white'
    },

    searchBox: {
       display: 'none'
    },

    searchField: {
        width: '-webkit-fill-available',
        border: 'none',
        background: 'none',
        height: '100%',
        color: 'white',
        fontSize: '2rem',
        fontWeight: 'bold',
    },

    searchTitle: {
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

    dropDownMenuIcon: {
        fontSize: '2.5rem',
        color: '#f4ca34'
    },

    cartNumber:{
        fontSize: '1rem',
        color: 'black'
    },

    navBox: {
        background: 'black',
        paddingBottom: '10px',
        position: 'fixed',
        top: '0',
        width: '100%',
        zIndex: '100'
    },

    nav: {
        margin: 'auto',
        maxWidth: '1500px',
        background: 'black',
        position: 'relative',
        width: '100%',
        transition: 'transform .25s cubic-bezier(.46, .01, .32,1)',
        height: '3.5rem',
        display: 'flex',
        justifyContent: 'space-between'
    },

    navLinks: {
        position: 'absolute',
        right: '0',
        display: 'flex',
        height: 'inherit',
        alignItems: 'center',
        paddingTop: '5px',
        justifyContent: 'flex-end'
    },

    title:{
        display: 'flex',
        paddingTop: '5px',
        flexDirection: 'row',
        alignItems: 'center',
    },

    a:{
        textDecoration: 'none',
    },

    title_h2:{
        fontSize: '2.4em',
        color: 'white',
        fontWeight: '800',
        margin: 0
    },

    link: {
        marginRight: '1rem',
        fontWeight: 'bold',
        color: 'white',
        textDecoration: 'none',
        fontSize: '1.1rem',
        display: 'flex',
        alignItems: 'center'
    },

    linkIcon: {
            marginRight: '.5rem',
            fontWeight: 'bold',
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.1rem'
    },

    button: {
        background: 'none',
        border: 'none',
        marginRight: '.5rem',
        cursor: 'pointer'
    }
}

