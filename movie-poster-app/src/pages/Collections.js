import React from "react";
import axios from "axios";    
import { useParams } from "react-router-dom";
import Nav from '../components/Nav';

const Collections = () => {

    // Get ID from URL
const params = useParams();
    
const [posterCollection, setPosterCollection] = React.useState([])

const baseURL = `/collections/${params.collectionId}`;

    React.useEffect(()=> {
        axios.get(baseURL)
        .then(res => {
            console.log(res.data.Collection.name)
            setPosterCollection(res.data.Collection.name)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [params.collectionId,baseURL])

    return(
        <div>
            <Nav />
            <div style={styles.box}>
                <div>
                   <p>{posterCollection}</p>
                </div>
            </div>
        </div>
        
    )
}

export default Collections

const styles = {

    box: {
        maxWidth: '1500px',
        margin: '4.4rem auto',
        display: 'flex',
        flexDirection: 'row'
    },

    img: {
        width: '55.22%'
    }
    
}