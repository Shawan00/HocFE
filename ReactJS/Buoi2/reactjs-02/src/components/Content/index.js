function Content(props) {
    console.log(props);
    return (
        <>
            <div className="box">{props.text} {props.string}</div>
        </>
    );
}

export default Content