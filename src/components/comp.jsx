import About from "./about";
import Profile from "./profile";
import Resume from "./resume";
import '../index.css'

function Comp(props){
    const Component = props.component;
    return <div className="container">
        <Profile />
        <Component />
    </div>
}

export default Comp;