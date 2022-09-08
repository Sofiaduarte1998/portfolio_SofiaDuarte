import React, { useState } from "react";
import "./Contact.css";
const Contact = () => {
  /* 1Descrição no contact */
  const [data, setData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
    submit: "",
  });

  /*  2Descrição no contact */
  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  /*  Envio do email */
  const formSubmit = (event) => {
    event.preventDefault();
    alert(
      `Name ${data.fullname}. 
	 Email address is ${data.email}. 
	 Subject on  ${data.subject}. 
	Here is my message I want to say : ${data.message}.
     Message sent :${data.submit}
	`
    );
  };

  /*  Definiçao  */
  return (
    <>
      <section className="contact" id="contact">
        <div className="container  top">
          <div className="heading text-center">
            <h1>Contact </h1>
          </div>
          <div className="content d_flex">
            <div className="left">
              <div className="box box_shodow">
                <div className="details">
                  <p>
                    City: <br /> <p>Fátima , Portyugal</p>
                  </p>
                  <p>
                    Phone: <br />
                    <p>+351-914-276-547</p>
                  </p>
                  <p>
                    Email:
                    <br /> <p>sofiaduartedesign@gmail.com</p>
                  </p>
                </div>
              </div>
            </div>

            {/*  Form */}
            <div className="right box_shodow">
              <form onSubmit={formSubmit}>
                <div className="f_flex">
                  <div className="input row">
                    <span className="from_name">Your Name</span>
                    <input
                      type="text"
                      name="fullname"
                      value={data.fullname}
                      onChange={InputEvent}
                    />
                  </div>
                  <div className="input row">
                    <span className="from_name"> Email</span>
                    <input
                      type="email"
                      name="email"
                      value={data.email}
                      onChange={InputEvent}
                    />
                  </div>
                  <div className="input row">
                    <span className="from_name">Subject</span>
                    <input
                      type="text"
                      name="subject"
                      value={data.subject}
                      onChange={InputEvent}
                    />
                  </div>
                  <div className="input row">
                    <span className="from_name">Your Message</span>
                    <input
                      cols="30"
                      rows="10"
                      name="message"
                      value={data.message}
                      onChange={InputEvent}
                    />
                  </div>
                  <div className="btn_from">
                    <button className="btn_shadow">
                      <spna value={data.subject} className="send">
                        Send Message
                      </spna>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
