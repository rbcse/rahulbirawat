import EduBox from "./edubox";
import Navbar from "./navbar";
import '../styles/resume.css';
function Resume(){
    return <div className="resume-section">
        <Navbar />
        <h1>Resume</h1>
        <div className="experience-section">
            <h2><i class="fa-solid fa-book-open"></i> Experience</h2>
            <EduBox heading="Software Engineer Intern" year="August 2024 - Present" text="Currently working as a full stack developer at Aspyr and Developing an interview conducting website. 
            Using Java and Spring Boot & React with Tailwind CSS for developing the software.
            "/>
            <EduBox heading="Amazon ML Summer School" year="July 2024 - Aug 2024" text="Selected among 35000+ students in Amazon ML School 2024. Learned about Supervised ML Algorithms , LLM's and Generative AI."/>
        </div>
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