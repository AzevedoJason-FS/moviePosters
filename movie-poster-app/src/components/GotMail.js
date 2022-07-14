const GotMail = (props) => {
    return(
        <div style={props.banner}>
            <h2 style={props.bannerTitle}>You've got mail!</h2>
            <span style={props.bannerSubTitle}>Take 10% off your first order when you sign up.</span>
            <input type='text' style={props.bannerInput} placeholder='Email address'/>
        </div>
    )
}

export default GotMail;
