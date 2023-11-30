export default function ContactMe() {
    return (
        <section id="Contact" className="contact--section">
            <div>
                <p className="sub--title">Get In Touch</p>
                <h2>Contact Me</h2>
                <p className="text-lg">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab fugiat assumenda amet voluptas asperiores cupiditate nam delectus obcaecati? At harum dolorem eum voluptatum porro nulla molestias beatae quod explicabo fuga.
                </p>
            </div>
            <form className="contact--form--container">
                <div className="container">
                    <label htmlFor="first-name" className="contact--label">
                        <span className="text-md">First Name</span>
                        <input type="text" className="contact--input test-md" name="first-name" id="first-name" required/>
                    </label>
                    <label htmlFor="last-name" className="contact--label">
                        <span className="text-md">Last Name</span>
                        <input type="text" className="contact--input test-md" name="last-name" id="last-name" required/>
                    </label>
                    <label htmlFor="email" className="contact--label">
                        <span className="text-md">Email</span>
                        <input type="email" className="contact--input test-md" name="email" id="email" required/>
                    </label>
                    <label htmlFor="phone-number" className="contact--label">
                        <span className="text-md">Phone Number</span>
                        <input type="number" className="contact--input test-md" name="phone-number" id="phone-number" required/>
                    </label>
                </div>
                <label htmlFor="Choose-topic" className="contact--label">
                    <span className="text-md">Choose a topic</span>
                    <select id="choose-input" className="contact--input text-md">
                        <option>Select One...</option>
                        <option>Item 1</option>
                        <option>Item 2</option>
                        <option>Item 3</option>
                    </select>
                </label>
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