
import './Contact.css'; 
import Vector from "./photos/Vector.png";
import Dots from "./photos/threedots.png";
import Photo from "./photos/photo.png";

const Contact = () => {
  return (
    <div className="contact-container">
       
        <div className= "Contacts">
        <img className="vector" src={Vector} /> 
        <h1 className='contact-heading'>Contacts</h1>
        <img className='dots' src={Dots} /> 
        </div>

      <div className="photo-section">
        <img className="contact-photo" src= {Photo}/>
        <h3 className='name1'>Sarah Lance</h3>
        <p className='address'>Accra, Ghana</p>
      </div>
    </div>
  );
}

export default Contact;
