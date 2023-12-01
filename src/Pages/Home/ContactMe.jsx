export default function ContactMe() {
    return (
        <section id="Contact" className="contact--section">
            <hr/>
            <div>
                <p className="sub--title">Get In Touch</p>
                <h2>Contact Me</h2>
            </div>
            <form className="contact--form--container">
                <div className="container">
                    <label htmlFor="first-name" className="contact--label">
                        <span className="text-md">First Name</span>
                        <input type="text" className="contact--input test-md" name="first-name" id="first-name" required/>
                    </label>
                    <label htmlFor="email" className="contact--label">
                        <span className="text-md">Email</span>
                        <input type="email" className="contact--input test-md" name="email" id="email" required/>
                    </label>
                </div>
                <label htmlFor="message" className="contact--label">
                    <span className="text-md">Message</span>
                    <textarea className="contact--input test-md" id="phone-number" rows="8" placeholder="Type your message..."/>
                </label>
                <label htmlFor="checkbox" className="checkbox--label">
                    <input type="checkbox" required name="checkbox" id="checkbox" />
                    <span className="text-sm">I accept the terms</span>
                </label>
                <div>
                    <button className="btn btn-primary contact--form--btn">Submit</button>
                </div>
            </form>
        </section>
    );
}