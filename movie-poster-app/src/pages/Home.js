import Nav from '../components/Nav';
import MiddleNav from '../components/MiddleNav';

const Home = () => {
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
        width: 'max-content'
    },

    promoBox: {
       
    },

    promoTitle: {
        fontSize: '6rem',
        fontWeight: 800,
        color: 'white',
        margin: 0
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