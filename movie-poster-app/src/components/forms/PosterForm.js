import React from 'react';

const PosterForm = (props) => {
    return(
    <form onSubmit={props.handleSubmit} style={styles.form}>
      <h2 style={styles.formTitle}>Create Poster</h2>
      <input
        className='name'
        type="text"
        name="name"
        placeholder="Poster Name"
        value={props.value}
        onChange={props.onChange}
      />
      <input
        className='img'
        type="file"
        name="sampleFile"
        placeholder="Image"
        value={props.valueImg}
        onChange={props.onChange}
      />
      <input
        className='m-2'
        type="text"
        name="img"
        placeholder="Image Address"
        value={props.valueImg}
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