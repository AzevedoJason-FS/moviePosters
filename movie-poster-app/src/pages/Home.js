import Nav from '../components/Nav';

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
                <img src="images/thor-love.jpeg" alt="Thor" style={styles.img}/>
                <img src="images/thor-love.jpeg" alt="Thor" style={styles.img}/>
                <img src="images/thor-love.jpeg" alt="Thor" style={styles.img}/>
                </div>
            </div>
            
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
        position: 'relative',
        height: '30rem',
        lenght: '100%',
        background: 'cornflowerblue',
    },

    promoBox: {
       
    },

    promoTitle: {
        fontSize: '6rem',
        fontWeight: 800,
        color: 'white'
    },

    img: {
        marginRight: '2rem',
        maxWidth: '100%',
        height: 'auto',
    },

    imgSlider: {
       display: 'flex',
       flexDirection: 'row',
       overflow: 'hidden',
       height: '90%',
       margin: 'auto',
    }
}