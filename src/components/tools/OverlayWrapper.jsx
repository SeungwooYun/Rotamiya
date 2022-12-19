const OverlayWrapper = (props) => {
    return (
        <div className="overlay-wrapper">
            {props.children}
        </div>
    )
}

export default OverlayWrapper