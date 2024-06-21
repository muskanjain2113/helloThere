import "./Detail.css";
import smallbox from "./photos/smallbox.png";
import call from "./photos/call.png";
import email from "./photos/email.png";

export default function Detail() {
   return (
       <div className="detail-container">
       <div className="container-1">
       <div className="mobile-details">
           <p className="m1"><strong>Mobile</strong></p>
           <p className="m2">+2330944747494</p>
       </div>
       <div className="mobile-photo">
           <img className="smallbox" src={smallbox} /> 
           <img className="call" src={call} />
   
       </div>
       </div>

       <div className="container-1">
       <div className="mobile-details">
           <p className="m1"><strong>Email</strong></p>
           <p className="m2">slance@gmail.com</p>
       </div>
       <div className="mobile-photo">
           <img className="email" src={email} /> 
           </div> 
           </div>

           <div className="container-1">
           <div className="mobile-details">
           <p className="m1"><strong>Groups</strong></p>
           <p className="m2">UI Friends</p>
       </div>
       </div>
       </div>
       


       
   )
}