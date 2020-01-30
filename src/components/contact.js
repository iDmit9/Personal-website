import React, { useState } from 'react';
import './style.scss';

const Contact = () => {

   const [isValid, setIsValid] = useState();

   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');

   const [checked, setChecked] = useState(false);

   const [sendStatus, setSendStatus] = useState('');

   const submitForm = (e) => {
      e.preventDefault();

      if (!name || !message || !email || !isValid) {
         const form1 = e.target;
         form1.reset();
         setChecked(true);
         return;
      }

      const form = e.target;
      const data = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
         if (xhr.readyState !== XMLHttpRequest.DONE) return;
         if (xhr.status === 200) {
            setSendStatus("SUCCESS");            
            setChecked(false); //because form reset
            form.reset(); //does not work in that situation
            setName('');
            setEmail('');
            setMessage('');
         } else {
            setSendStatus("ERROR");
            setChecked(true);
         }
      };
      xhr.send(data);
   }

   const emailValidation = (event) => {       
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //pattern from https://emailregex.com/ but without Unnecessary escape character
      let value = pattern.test(event.target.value)
      setEmail(event.target.value)
      setIsValid(value);
   }

   return (
      <>
         <section className="section contact" id='contact'>
            <div className="container">
               <div className="content has-text-centered">
                  <h2 className="title is-size-3 is-spaced">Contact</h2>
               </div>
               {/* <p className="subtitle is-size-5 has-text-centered">
                  You can contact me on LinkedIn <br/>
                  or <br/>
                  wright me a message
               </p> */}

               <form
                  onSubmit={submitForm}
                  action="https://formspree.io/mqkpvwzg"
                  method="POST"
               >
                  <div className="field is-horizontal">
                     <div className="field-body">
                        <div className="field">
                           <div className="control is-expanded">
                              <input
                                 className={`input is-medium ${!!checked && !name && 'is-danger'}`}
                                 type="text"
                                 placeholder="Name"
                                 value={name}
                                 name="name"
                                 onChange={(event) => setName(event.target.value)}
                              />
                              {!!checked && !name && (
                                 <p className="help is-danger">
                                    This field is required
                                 </p>
                              )}

                           </div>
                        </div>
                        <div className="field">
                           <div className='control is-expanded has-icons-right' >
                              <input
                                 className={`input is-medium ${!!checked && (!email || !isValid) && 'is-danger'}`}
                                 type="email"
                                 placeholder="Email"
                                 value={email}
                                 name="_replyto"
                                 onChange={(event) => emailValidation(event)} 
                              />
                              {!!checked && (
                                 !email
                                    ? <p className="help is-danger">This field is required</p>
                                    : !isValid && <p className="help is-danger">This email is invalid</p>
                              )}
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="field is-horizontal">
                     <div className="field-body">
                        <div className="field">
                           <div className="control">
                              <textarea
                                 className={`textarea is-medium ${!!checked && !message && 'is-danger'}`}
                                 placeholder="Message"
                                 value={message}
                                 name="message"
                                 onChange={(event) => setMessage(event.target.value)}
                              />
                           </div>

                           {!!checked && !message && (
                              <p className="help is-danger">
                                 This field is required
                              </p>
                           )}
                        </div>
                     </div>
                  </div>

                  {sendStatus === "SUCCESS"
                     ? <p className="help is-success">Thanks!</p>
                     : (
                        <div className="field is-horizontal">
                           <div className="field-body">
                              <div className="field">
                                 <div className="control">
                                    <button className="button is-medium is-primary" type='submit'>
                                       Send message
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     )
                  }

                  {!!checked
                     ? !sendStatus && <p className="help is-danger">please fill out the form</p>
                     : sendStatus === "ERROR" && <p className="help is-danger">Ooops! There was an error.</p>
                  }

               </form>
            </div>
         </section>
      </>
   )
};

export default Contact;