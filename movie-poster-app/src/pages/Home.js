import React from "react";
import axios from "axios"
import Nav from '../components/Nav';
import MiddleNav from '../components/MiddleNav';
import PosterForm from '../components/forms/PosterForm';

const Home = () => {
    
    const [poster, setPoster] = React.useState(null);

    const baseURL = "http://localhost:3001/posters";

    React.useEffect(() => {
        axios.get(baseURL)
             .then((response) => {
                setPoster(response.data);
                console.log(response.data);
             }).catch(err => {
                if (err.response && err.response.status === 406){
                    console.clear()
                }
              })
    }, []);
  
    if (!poster) return null;

    const handleSubmit = () => {

    }
    return(
        <div style={styles.main}>
            <Nav />
            <div style={styles.promo}>
                <div style={styles.promoBox}>
                <h2 style={styles.promoTitle}>THAT GOD <br/>LIFE</h2>
                </div>
                <div style={styles.imgSlider}>
                <img src="images/thor-love.jpeg" alt="Thor" style={styles.img}/>
                <img src="images/thor-rag.jpg" alt="Thor" style={styles.img}/>
                <img src="images/thor.jpg" alt="Thor" style={styles.img}/>
                <img src="images/avengers.jpg" alt="Thor" style={styles.img}/>
                </div>
            </div>
            <MiddleNav/>
            <PosterForm 
            
            />
        </div>    
    )
}

export default Home;

const styles = {
    main: {
        maxWidth: '1500px',
        margin: 'auto'
    },

    promo: {
        display: 'flex',
        height: '30rem',
        lenght: '100%',
        alignItems: 'center',
    },

    promoBox: {
       
    },

    promoTitle: {
        fontSize: '5.8rem',
        fontWeight: 800,
        color: 'white',
        margin: 0,
        letterSpacing: '-2px'
    },

    img: {
        marginRight: '2rem',
        objectFit: 'contain',
        width: '100%'
    },

    imgSlider: {
       display: 'flex',
       flexDirection: 'row',
       overflow: 'hidden',
       height: '90%',
       margin: 'auto',
       width: '66%',
       marginRight: 0
    }
}