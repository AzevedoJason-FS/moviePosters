import React from "react";
import axios from "axios";    
import { useParams } from "react-router-dom";
import Nav from '../components/Nav';

const Collections = () => {

    // Get ID from URL
const params = useParams();
    
const [posterCollection, setPosterCollection] = React.useState([])
const [poster, setPoster] = React.useState([]);

const baseURL = `/collections/${params.collectionId}`;
const baseURLPoster = `/posters/collection/${params.collectionId}`;

    React.useEffect(()=> {
        axios.get(baseURL)
        .then(res => {
            setPosterCollection(res.data.Collection.name)
        })
        .catch(err =>{
            console.log(err)
        })

        axios.get(baseURLPoster)
        .then((response) => {
            console.log(response.data.Poster);
            setPoster(response.data.Poster);
        }).catch(err => {
            if (err.response && err.response.status === 406){
                console.clear()
            }
        }) 
      
    }, [params.collectionId,baseURL,baseURLPoster])

    return(
        <div>
            <Nav />
            <div style={styles.box}>
                <div>
                   <h2>{posterCollection}</h2>
                </div>
            </div>
                    {poster.map((poster) => {
                        return (
                            <div key={poster._id}>
                            <h2 ><a href={'posters/products/' + poster._id}>{poster.name}</a></h2>
                            <img src={poster.img} style={styles.imgg} alt={poster.name}></img>
                            </div>
                        )
                    })}
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