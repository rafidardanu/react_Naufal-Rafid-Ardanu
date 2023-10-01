import { useState } from "react";
function Contact() {
const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
});

function showAlert(event) {
    event.preventDefault();
    const { firstName, lastName, email, message } = formData;
    const alertMessage = `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nMessage: ${message}`;
    alert(alertMessage);
    setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });
}

function handleInputChange(event) {
    const { id, value } = event.target;
    setFormData((prevData) => ({
        ...prevData,
        [id]: value,
    }));
}

return (
    <div id="contact">
        <div className="container">
            <div className="row align-items-center">
                <div className="main-title col-sm-12 col-md-6 col-lg-4">
                    <h1 className="text-black fw-bold">Contact Us</h1>
                    <p className="text-black">
                    Need to get in touch with us? Either fill out the form with your
                    inquiry or find the department gmail you like to contact below.
                    </p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-8" id="contact-us-form">
                    <form onSubmit={showAlert} id="form" autoComplete="off">
                    <div className="row">
                        <div className="col-6">
                        <label className="form-label">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            required
                            value={formData.firstName}
                            onChange={handleInputChange}
                        />
                        </div>
                        <div className="col-6 mb-3">
                        <label className="form-label">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            required
                            value={formData.lastName}
                            onChange={handleInputChange}
                        />
                        </div>
                        <div className="col-12 mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        </div>
                        <div className="col-12 mb-3 contact-input">
                        <label className="form-label">
                            What can we help you with?
                        </label>
                        <textarea
                            className="form-control"
                            style={{ height: "110px" }}
                            id="message"
                            value={formData.message}
                            onChange={handleInputChange}
                        ></textarea>
                        </div>
                        <div className="col-6">
                        <button
                            type="submit"
                            id="submit"
                            className="btn btn-secondary"
                        >
                            Submit
                        </button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Contact;
