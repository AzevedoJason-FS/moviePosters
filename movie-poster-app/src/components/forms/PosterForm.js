import React from 'react';

const PosterForm = (props) => {
    return(
    <form 
        onSubmit={props.handleSubmit} 
        style={styles.form} 
        id='uploadForm' 
        encType="multipart/form-data"
    >
      <h2 style={styles.formTitle}>Create Poster</h2>
      name
      <input
        className='name'
        type="text"
        name="name"
        placeholder="Poster Name"
        value={props.valueName}
        onChange={props.onChange}
      />
      Img
      <input
        className='img'
        type="file"
        name="sampleFile"
        placeholder="Image"
        value={props.valueImg}
        onChange={props.onChangeImg}
      />
      size
      <input
        className='size'
        type="text"
        name="size"
        placeholder="Size"
        value={props.valueSize}
        onChange={props.onChange}
      />
      format
       <input
        className='format'
        type="text"
        name="format"
        placeholder="Format"
        value={props.valueFormat}
        onChange={props.onChange}
      />
      rolled-folded
       <input
        className='rolled'
        type="text"
        name="rolled"
        placeholder="Rolled or Folded"
        value={props.valueRolled}
        onChange={props.onChange}
      />
      year
       <input
        className='year'
        type="text"
        name="year"
        placeholder="Year"
        value={props.valueYear}
        onChange={props.onChange}
      />
      original_reprint
       <input
        className='original'
        type="text"
        name="original"
        placeholder="Original or Reprint"
        value={props.valueOriginal}
        onChange={props.onChange}
      />
      collectionName
       <input
        className='collectionName'
        type="text"
        name="collectionName"
        placeholder="Size"
        value={props.valueCollectionName}
        onChange={props.onChange}
      />
      price
       <input
        className='price'
        type="text"
        name="price"
        placeholder="Price"
        value={props.valuePrice}
        onChange={props.onChange}
      />
      inventory
       <input
        className='inventory'
        type="text"
        name="inventory"
        placeholder="Inventory"
        value={props.valueInventory}
        onChange={props.onChange}
      />
      slug
       <input
        className='slug'
        type="text"
        name="slug"
        placeholder="Slug"
        value={props.valueSlug}
        onChange={props.onChange}
      />
      description
       <input
        className='description'
        type="text"
        name="description"
        placeholder="Description"
        value={props.valueDescription}
        onChange={props.onChange}
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