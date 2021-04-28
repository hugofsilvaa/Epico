import React from 'react'
import './Contact.css'

const Contact = () => {
        return (
            <div className="background">
            <div className="contactcontainer">
                <div className="contact">
                <h1>Hey friend! </h1>
                <br/>
                <br/>
                <p>&#10003; Want your favorite game featured in our weekly highlight? </p>
                <br/>
                <p>&#10003; Have a suggestion for our website? </p>
                <br/>
                <p>&#10003; Know of a pretty cool Board Game Store/Cafe that is not showing in our map?</p> 
                <br/>
                <p>&#10003; Want to share a funny board game related story with us?</p>
                <br/>
                <br/>
                <br/>
                <br/>
                <h2>Contact us!</h2>
                </div>
                <div className="contactform">
                <section>
                    <form>
                    <label for="name">Name:</label><br />
                    <input type="text" id="name" name="name" placeholder="e.g.: John Doe" /><br />
                    <label for="email">Email:</label><br />
                    <input type="email" id="email" name="email" placeholder="e.g.: johndoe@gmail.com"/><br />
                    <label for="message">Message:</label><br />
                    <textarea type="text" id="message" name="message" placeholder="e.g.: Your app is incredible and you guys are awesome!"></textarea>
                    <br/>
                    <input type="submit" value="Submit" />
                    </form>
                </section>
                </div>
            </div>
            </div>
                        )
    }

export default Contact