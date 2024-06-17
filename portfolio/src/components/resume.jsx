import EduBox from "./edubox";
import Navbar from "./navbar";
import '../styles/resume.css';
function Resume(){
    return <div className="resume-section">
        <Navbar />
        <h1>Resume</h1>
        <div className="education-section">
            <div className="heading-section">
                <i className="fa-solid fa-school"></i>
                <h2>Education</h2>
            </div>
            <EduBox heading="B-Tech Computer Science" year="2022-2026" text="Currently pursuing a BTech in Computer Science at Sardar Vallabhbhai National Institute of Technology, Surat , with  CGPA" grade="9.23." />
            <EduBox heading="Senior Secondary" year="2022" text="Completed my higher secondary education at Shri Pragya Public School, Bijainagar in the Science Maths stream, achieving a commendable" grade="95%." />
            <EduBox heading="Secondary" year="2020" text="Completed my secondary education at Shri Pragya Public School, Bijainagar, achieving a commendable" grade="94%" />
        </div>
    </div>
}

export default Resume;