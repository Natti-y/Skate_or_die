import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();           
  const [status, setStatus] = useState(""); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_5efuxvg", // EmailJS service id    
      "template_jcu7xyr", // EmailJS template id 
      form.current,        
      "8BifFuR9OGBfXZdbd" // EmailJS public key
    )
    .then(
      (result) => {
        console.log(result.text);
        setStatus("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
        setStatus("Failed to send message. Try again later.");
      }
    );
  };

  return (
    <div className="contact-page-wrapper">
      <div className="contact-page-inner">
      <div className="contact-image">
        <img src="src/assets/varial-kickflip-skate.gif" alt="Skater" />
      </div>
      <div className="container mt-5 contact-page">
        <h1>Contact</h1>
        <p><i>If you have any questions, feel free to reach out!</i></p>

        <form ref={form} className="contact-form mt-4" onSubmit={sendEmail}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="from_name" 
              className="form-control"
              placeholder="Your name"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              name="from_phone"
              className="form-control"
              placeholder="Your phone number"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="from_email"
              className="form-control"
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              name="from_message"  
              className="form-control"
              rows="4"
              placeholder="Write your message..."
              required
            />
          </div>

          <button type="submit" className="btn-style">Send</button>
        </form>

        {status && <p className="mt-3">{status}</p>}
      </div>
      </div>
    </div>
  );
};

export default Contact;
