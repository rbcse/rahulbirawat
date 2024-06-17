import '../styles/details.css'
function Detail(props) {
    return (
        <div className="detail-section">
            <i className={props.icon_name} />
            <div className="text_details">
                <h2>{props.heading}</h2>
                <a href={props.link}>{props.para}</a>
            </div>
        </div>
    );
}

export default Detail;
