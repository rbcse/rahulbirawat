import Detail from "./details";
import '../styles/profile.css';
import { useState } from "react";

function Profile() {
    let [downBtn, setBox] = useState(false);

    function showBox() {
        setBox(!downBtn);
    }

    return (
        <div className="profile-section">
            <i 
                id="down-btn" 
                className="fa-solid fa-regular fa-angles-down" 
                onClick={showBox}
            ></i>
            <div className="box1">
                <div className="image-section">
                    <img src="../public/my-avatar.png" alt="" />
                </div>
                <h1>Rahul Birawat</h1>
                <p>full stack developer</p>
            </div>
            <div className={`box2 ${downBtn ? 'show' : ''}`}>
                <Detail icon_name="fa-solid fa-envelope" heading="Email" link="https://mail.google.com/mail/u/0/#inbox" para="rahuljain10159@gmail.com" />
                <Detail icon_name="fa-brands fa-github" heading="Github" link="https://github.com/rbcse" para="Github profile" />
                <Detail icon_name="fa-brands fa-linkedin" heading="Linkedin" link="https://www.linkedin.com/in/rahul-birawat-5620ba250/" para="profile" />
                <Detail icon_name="fa-solid fa-location-dot" heading="Location" link="#" para="Surat , Gujarat" />
            </div>
        </div>
    );
}

export default Profile;
