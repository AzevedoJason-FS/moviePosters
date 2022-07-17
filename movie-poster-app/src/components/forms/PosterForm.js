import React from "react";
import axios from "axios"

const PosterForm = () => {

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

      const [uploadFile, setUploadFile] = React.useState();

      const handleSubmit = async(e) => {
        e.preventDefault();

        const dataArray = new FormData();
          dataArray.append("formValue", formValue);
          dataArray.append("uploadFile", uploadFile);

        const baseURL = "/posters/upload";
            axios.post(baseURL, dataArray,{
              headers: {
                "Content-Type": "multipart/form-data"
              }
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

    return(
    <form 
        method="post" 
        encType="multipart/form-data"
        onSubmit={handleSubmit} 
        style={styles.form} 
        id='uploadForm' 
    >
      <h2 style={styles.formTitle}>Create Poster</h2>
      name
      <input
        className='name'
        type="text"
        name="name"
        placeholder="Poster Name"
        value={formValue.name}
        onChange={handleChange}
      />
      Img
      <input
        className='img'
        type="file"
        name="file"
        placeholder="Image"
        onChange={(e) => setUploadFile(e.target.files)}
      />
      size
      <input
        className='size'
        type="text"
        name="size"
        placeholder="Size"
        value={formValue.size}
        onChange={handleChange}
      />
      format
       <input
        className='format'
        type="text"
        name="format"
        placeholder="Format"
        value={formValue.format}
        onChange={handleChange}
      />
      rolled-folded
       <input
        className='rolled'
        type="text"
        name="rolled"
        placeholder="Rolled or Folded"
        value={formValue.rolled}
        onChange={handleChange}
      />
      year
       <input
        className='year'
        type="text"
        name="year"
        placeholder="Year"
        value={formValue.year}
        onChange={handleChange}
      />
      original_reprint
       <input
        className='original'
        type="text"
        name="original"
        placeholder="Original or Reprint"
        value={formValue.original}
        onChange={handleChange}
      />
      collectionName
       <input
        className='collectionName'
        type="text"
        name="collectionName"
        placeholder="Size"
        value={formValue.collectionName}
        onChange={handleChange}
      />
      price
       <input
        className='price'
        type="text"
        name="price"
        placeholder="Price"
        value={formValue.price}
        onChange={handleChange}
      />
      inventory
       <input
        className='inventory'
        type="text"
        name="inventory"
        placeholder="Inventory"
        value={formValue.inventory}
        onChange={handleChange}
      />
      slug
       <input
        className='slug'
        type="text"
        name="slug"
        placeholder="Slug"
        value={formValue.slug}
        onChange={handleChange}
      />
      description
       <input
        className='description'
        type="text"
        name="description"
        placeholder="Description"
        value={formValue.description}
        onChange={handleChange}
      />
      <button type="submit" style={styles.button}>Submit Poster</button>
    </form>
    )
}

export default PosterForm;

const styles = {
    formTitle: {
       
    },

    form: {
        background: 'white',
        width: 'fit-content',
        margin: 'auto',
        padding: '20px'
    }
}