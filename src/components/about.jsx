import Navbar from "./navbar";
import Skill from "./skill";
import '../styles/about.css'

function About(){
    return <div className="about-section">
        <Navbar />
        <div className="text-section">
            <h1>About me</h1>
            <p>I am Rahul Birawat , 3rd year undergraduate in Computer Science and Engineering from Sardar Vallabhbhai Natiobal Institute of Technology , Surat. My passion lies in exploring different fields of technology.</p>
            <p>My latest expertise is in web development using ReactJS , NodeJS , ExpressJS and PostgresSQL.Morever I am always eager to learn and adapt to new technologies and frameworks, as I strive to stay up-to-date with the latest industry trends.I am open to exciting opportunities where I can contribute my expertise and make a meaningful impact.</p>
            <a href="../public/rahul_birawat_resume.pdf" download="resume.pdf">Download Resume</a>
        </div>
        <h1>Skills</h1>
        <div className="skills">
            <Skill icon_name="fa-solid fa-computer" heading="Programming Languages" para="C, C++ & Python" />
            <Skill icon_name="fa-solid fa-database" heading="Database" para="PostgresSQL , RDBMS" />
            <Skill icon_name="fa-brands fa-codepen" heading="Frontend" para="ReactJS , EJS , CSS & Bootstrap" />
            <Skill icon_name="fa-solid fa-code" heading="Backend" para="NodeJS , ExpressJS" />
        </div>
    </div>
}

export default About;