import '../styles/edubox.css'
function EduBox(props){
    return <div className="education-box">
        <i className='fa-solid fa-star'></i>
        <div className="box1">
            <h3>{props.heading}</h3>
            <span>{props.year}</span>
            <p>{props.text} <span>{props.grade}</span></p>
        </div>
    </div>
}

export default EduBox;