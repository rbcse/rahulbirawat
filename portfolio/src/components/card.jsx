import '../styles/card.css'
function Card(props){
    const clr = props.color;
    return <div className="project-card">
        <img src={props.image} alt="" />
        <h2>{props.heading}</h2>
        <p style={{color : clr}}>Stack : {props.stacks}</p>
        <div className="demo">
            <a href={props.link} className="demoVideo">Video</a>
            <a className='githubLink' href={props.github}>GitHub</a>
        </div>
    </div>
}

export default Card;