import Navbar from "./navbar";
import '../styles/contact.css'
function Contact(){
    return <div className="contact-section">
        <Navbar />
        <h1>Contact Me</h1>
        <form action="">
            <input type="text" name="" id="" placeholder="Your Name"/>
            <input type="email" name="" id="" placeholder="Your email"/>
            <input type="text" name="" id="" placeholder="Phone Number"/>
            <textarea name="" id="" rows="9" placeholder="Message"></textarea>
            <button type="submit">Send Message</button>
        </form>
    </div>
}

export default Contact;