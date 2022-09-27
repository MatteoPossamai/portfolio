import {useState} from 'react';
import emailjs from 'emailjs-com';

function Contact(){
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    function sendEmail(e:any) {
        e.preventDefault();
        alert('Message sent, we will get back to you shortly');
        setName('');
        setMessage('');
    
        emailjs.sendForm('service_hjxkwbs', 'template_857cuv2', e.target, 'CaQprh6guD2WDQioy')
      }

    return (
        <section className="job-exp-div" id="contact">
            
            <h1 className="tit"><b className="number_heading">05.</b> Contact Me</h1>
            <hr className="header-line"/>
            <div className="contact-box">
                <p>If you want to contact me, on the sides of this page you have almost 
                    all my social netoworks and email, but if you want here there is also 
                    a form where you can send me a message directly. 

                    <br />
                    <br />

                    I am opened to receive job offers, freelance work, requests of consultancy
                    or just to talk to anyone who desires to do so. I hope to hear you soon...
                </p>
            </div>
            <form className="contact-form" onSubmit={sendEmail}>
                    <input value={name} onChange={(e) =>{setName(e.target.value)}} className="email-form" spellCheck="false" type="text" placeholder="Your name or email..." name='sender' />
                    <textarea value={message} onChange={(e) =>{setMessage(e.target.value)}} className="message-form" spellCheck="false" placeholder="Message" name="message" />
                    <button className="submitButton" type="submit">Send</button>
                </form>
        </section>
    )
}

export default Contact;