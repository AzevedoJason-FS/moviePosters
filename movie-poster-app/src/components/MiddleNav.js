import React from 'react'
import { Link } from 'react-router-dom'
import "../index";
import axios from "axios"

const MiddleNav = () => {

    const [collection, setCollection] = React.useState('');

    const baseURLCollection = "/collections/middle";

    React.useEffect(() => {
        axios.get(baseURLCollection)
            .then((response) => {
                setCollection(response.data.Collections.name);
                console.log(response.data.Collections.name);
            }).catch(err => {
                if (err.response && err.response.status === 406){
                    console.clear()
                }
            })  
    }, [])
    
    return(
        <nav style={styles.nav}>
            <div className='nav-links-middle' style={styles.navLinks}>
            {collection.length > 0 ? (
                collection.map((collection) => {
                    return (
                        <Link to={'collections/' + collection._id} style={styles.link} className='link' key={collection._id}>{collection.name}</Link>
                    )
                })
            ) : (
                    <p>uh oh! No Collections in database</p>
                )
            }
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
        whiteSpace: 'nowrap',
        overflowY: 'scroll'
    },

    link: {
        color: 'white',
        textDecoration: 'none',
        fontWeight: '800',
        fontSize: '2rem',
    },
}