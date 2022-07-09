import React from "react";
import axios from "axios"
import Nav from '../components/Nav';
import MiddleNav from '../components/MiddleNav';
import PosterForm from '../components/forms/PosterForm';

const Home = () => {
    
    const [poster, setPoster] = React.useState(null);
    const [file, setFile] = React.useState()
    const [formValue, setformValue] = React.useState({
        name: '',
        img: '',
        size: '',
        format: '',
        rolled: '',
        year: '',
        original: '',
        collectionName: '',
        price: '',
        inventory: '',
        slug: '',
        description: ''
      });

    const baseURL = "/posters";

    React.useEffect(() => {
        axios.get(baseURL)
             .then((response) => {
                setPoster(response.data.Posters);
                console.log(response.data.Posters);
             }).catch(err => {
                if (err.response && err.response.status === 406){
                    console.clear()
                }
              })
    }, []);
  
    if (!poster) return null;

    const handleSubmit = async(e) => {
        e.preventDefault();
        const baseURL = "/posters";
            axios.post(baseURL, {
                    name:formValue.name,
                    img:formValue.img,
                    size:formValue.size,
                    format:formValue.format,
                    rolled:formValue.rolled,
                    year: formValue.year,
                    original: formValue.original,
                    collectionName: formValue.collectionName,
                    price: formValue.price,
                    inventory: formValue.inventory,
                    slug: formValue.slug,
                    description: formValue.description
              })
                 .then((response) => {
                    console.log(response);
              }, (error) => {
                    console.log(error.response);
              });
    }

    const handleChange = (e) => {

        setformValue({
          ...formValue,
          [e.target.name]: e.target.value
        });
      }

      const fileChangeHandler = (e) => {
		setFile(e.target.files[0])
	};

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
                handleSubmit={handleSubmit}
                onChange={handleChange}
                onChangeImg={fileChangeHandler}
                valueName={formValue.name}
                valueImg={formValue.img}
                valueSize={formValue.size}
                valueFormat={formValue.format}
                valueRolled={formValue.rolled}
                valueYear={formValue.year}
                valueOriginal={formValue.original}
                valueCollectionName={formValue.collectionName}
                valuePrice={formValue.price}
                valueInventory={formValue.inventory}
                valueSlug={formValue.slug}
                valueDescription={formValue.description}
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