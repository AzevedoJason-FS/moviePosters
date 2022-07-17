import React from "react";
import axios from "axios";    
import { useParams } from "react-router-dom";
import Nav from '../components/Nav';

const Products = () => {

    // Get ID from URL
const params = useParams();
    
const [poster, setPoster] = React.useState([])
const [posterCollection, setPosterCollection] = React.useState([])

const baseURL = `/posters/products/${params.posterId}`;

    React.useEffect(()=> {
        axios.get(baseURL)
        .then(res => {
            console.log(res.data.Poster)
            setPoster(res.data.Poster)
            setPosterCollection(res.data.Poster.collectionName)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [params.posterId,baseURL])

    return(
        <div>
            <Nav />
            <div style={styles.box}>
                <div>
                    <img src={poster.img} style={styles.img} alt="img"/>
                </div>
                <div>
                    <p>{poster._id}</p>
                    <h2>{poster.name}</h2>
                    <p>${poster.price}</p>
                    <p>{poster.year}</p>
                    <p>{poster.size}</p>
                    <p>{poster.original_reprint},{poster.rolled_folded}</p>
                    <p>{poster.inventory}</p>
                    <p>{posterCollection.name}</p>
                </div>
            </div>
        </div>
        
    )
}

export default Products

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