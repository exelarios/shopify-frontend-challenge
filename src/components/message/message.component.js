import "./message.styles.scss";

function Message(props) {
    return(
        <div className="message-banner">
            <center> {props.text} </center>
        </div>
    )
}

export default Message;