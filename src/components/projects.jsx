import Card from "./card";
import Navbar from "./navbar";
import '../styles/projects.css';
function Project(){
    return  <div className="project-section">
        <Navbar />
        <h1>Projects</h1>
        <div className="cards">
            <Card color="orange" image="../../public/bookmyhotel.png" heading="BookMyHotel" stacks="EJS , NodeJS , ExpressJS , Razorpay & PostgresSQL" link="https://www.loom.com/share/694a4410b3ef4e078328b1ca73a03249?sid=971ba178-9029-48e5-bc90-04631daf7efc" github="https://github.com/rbcse/hotelbooking" />
            <Card color="white" image="../../public/foodie.png" heading="Foodie" stacks="EJS , NodeJS , ExpressJS , PostgresSQL" github="https://github.com/rbcse/Foodie" link="https://www.loom.com/share/bd948d602a394328acc59ecf4e4864a9?sid=a0a209b6-63b7-426c-b65b-10c04823493e"/>
            <Card color="lightgreen" image="../../public/health.png" heading="VitaliZenLife" stacks="HTML , CSS , Bootstrap & JavaScript" github="https://rbcse.github.io/mywebsite/" link="https://www.loom.com/share/43cada71d6d249bc93f8f13e7b4c0240?sid=009f85ee-dd8a-43b1-8c21-84995a1ad985" />
            <Card color="orange" image="../../public/cafe.png" heading="Koe-The Kafe" stacks="HTML , CSS , Bootstrap & Javascript" github="https://rahulbirawat.github.io/Koe-The-Kafe/" link="https://www.loom.com/share/6ead0442ca9f40e5bc6dba20bb01bfd4?sid=d9d42c8b-cd2c-4c30-a93e-cb12a75196e7" />
        </div>
    </div>
}

export default Project;