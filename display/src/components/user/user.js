
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function User() {
  const [status,setstatus]=useState(false)

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
  setstatus(true)
    emailjs.sendForm('service_nlnr9a5', 'template_vlqi5ro', form.current, 'BQJtv3cE-mOGO0h3m')
      .then((result) => {
          console.log(result);
          setstatus(false)
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="container">
      { status?"loader":
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
}
    </div>
  );
  };

export default User



