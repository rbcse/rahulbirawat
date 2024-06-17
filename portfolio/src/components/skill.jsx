import '../styles/skill.css';
function Skill(props){
    return <div className="skill-box">
        <div className="image-section">
            <i className={props.icon_name}></i>
        </div>
        <div className="text-section">
            <h3>{props.heading}</h3>
            <p>{props.para}</p>
        </div>
    </div>
}

export default Skill;