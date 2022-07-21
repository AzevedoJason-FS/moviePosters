const Button = (props) => {
    return(
        <button type="submit" style={props.style} onClick={props.onClick}>{props.buttonTitle}</button>
    )
}

export default Button;