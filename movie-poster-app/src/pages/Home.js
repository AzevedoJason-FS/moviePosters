import React from "react";
import { Helmet } from 'react-helmet-async';
import axios from "axios"
import Nav from '../components/Nav';
import MiddleNav from '../components/MiddleNav';
import Footer from '../components/Footer';
import GotMail from "../components/GotMail";

const Home = () => {

    const [poster, setPoster] = React.useState(null);

    const baseURL = "/posters";

    React.useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
                setPoster(response.data.Posters.name);
                console.log(response.data.Posters.name);
            }).catch(err => {
                if (err.response && err.response.status === 406){
                    console.clear()
                }
            })
    }, []);

    if (!poster) return null;

    return(
        <div>
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
        <div style={styles.main}>
            <Helmet>
                <style>{"body { background-color: black; }"}</style>
            </Helmet>
            <MiddleNav />

            {poster.length > 0 ? (
                    poster.map((poster) => {
                        return (
                            <div key={poster._id}>
                            <h2 ><a href={'posters/products/' + poster._id}>{poster.name}</a></h2>
                            <img src={poster.img} style={styles.imgg} alt={poster.name}></img>
                            </div>
                        )
                    })
            ) : (
                    <p>uh oh! No Posters in database</p>
                )
            }
        </div>
        <GotMail 
            banner={styles.banner}
            bannerTitle={styles.bannerTitle}
            bannerSubTitle={styles.bannerSubTitle}
            bannerInput={styles.bannerInput}
        />
        <Footer />
        </div>    
    )
}

export default Home;

const styles = {

    imgg: {
        width: '300px'
    },

    main: {
        maxWidth: '1500px',
        margin: 'auto'
    },

    promo: {
        display: 'flex',
        height: '30rem',
        lenght: '100%',
        marginTop: '3.5rem',
        alignItems: 'center',
    },

    promoBox: {
        width: '40%',
        display: 'flex',
        justifyContent: 'flex-end'
    },

    promoTitle: {
        fontSize: '6rem',
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
    },

    banner: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: '4rem',
        paddingTop: '4rem',
        background: 'white',
    },

    bannerTitle: {
        fontSize: '5rem',
        margin: '0'
    },

    bannerSubTitle: {
        fontSize: '1.5rem',
        margin: '.5rem auto'
    },

    bannerInput: {
        border: '4px solid black',
        width: '45%',
        fontSize: '2rem',
        padding: '5px',
        margin: '2rem auto'
    }
}