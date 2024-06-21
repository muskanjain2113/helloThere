
import './App.css'
import Contact from './Contact';
import Detail from './Detail';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';

import telegram from "./photos/telegram.png";
import whatsapp from "./photos/whastapp.png";

function App() {
  
  return (
    <div className='App'>
      <Contact />
      <Detail />
      
      <Section2 title="Account Linked"/>
      <Section3 title="Telegram" image={telegram}/>
      <Section3 title="Whatsapp" image={whatsapp}/>
      <Section2 title="More Options"/>
      <Section4 title="Share Contact"/>
      <Section4 title="QR Code"/>
      

      
    </div>
  );
}

export default App
