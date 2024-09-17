import Card from "./card";
import Navbar from "./navbar";
import '../styles/projects.css';
function Project() {
    return <div className="project-section">
        <Navbar />
        <h1>Projects</h1>
        <div className="cards">
            <Card color="orange" image="../../public/quiclearn.png" heading="QuicLearn" stacks="ReactJS , NodeJS , ExpressJS , Razorpay & MongoDB" link="https://github.com/rbcse/QuicLearn" github="https://quiclearnedu.netlify.app/" />

            <Card color="white" image="../../public/bookmyhotel.png" heading="BookMyHotel" stacks="EJS , NodeJS , ExpressJS , Razorpay & PostgresSQL" link="https://www.loom.com/share/694a4410b3ef4e078328b1ca73a03249?sid=971ba178-9029-48e5-bc90-04631daf7efc" github="https://github.com/rbcse/hotelbooking" />
            <Card color="lightgreen" image="../../public/health.png" heading="VitaliZenLife" stacks="HTML , CSS , Bootstrap & JavaScript" github="https://rbcse.github.io/mywebsite/" link="https://github.com/rbcse/mywebsite" />
            <Card color="orange" image="../../public/cafe.png" heading="Koe-The Kafe" stacks="HTML , CSS , Bootstrap & Javascript" github="https://rahulbirawat.github.io/Koe-The-Kafe/" link="https://github.com/RahulBirawat/Koe-The-Kafe" />
        </div>
    </div>
}

export default Project;