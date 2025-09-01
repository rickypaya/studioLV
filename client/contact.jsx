import React from "react";
import "./styles/contactStyles.css";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-form-wrapper">
        <h2 className="form-title">Schedule Your First Voice Lesson Today!</h2>
        <p className="form-subtitle">
          Let's find the perfect time for your musical journey
        </p>

        <form onSubmit={onSubmit} className="contact-form">
          <input
            type="hidden"
            name="access_key"
            value="e82fd2db-10f3-4a38-9da7-4e5e6ea89237"
          />

          <div className="form-row">
            <div className="form-group half-width">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group half-width">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group half-width">
              <label htmlFor="time-pref-1">First Time Preference</label>
              <input
                type="text"
                id="time-pref-1"
                name="time_preference_1"
                placeholder="e.g., Mondays 3-5pm"
                required
              />
            </div>

            <div className="form-group half-width">
              <label htmlFor="time-pref-2">Second Time Preference</label>
              <input
                type="text"
                id="time-pref-2"
                name="time_preference_2"
                placeholder="e.g., Wednesdays 2-4pm"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message for Your Voice Teacher</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your musical goals, experience level, or any specific requests..."
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Lesson Request
          </button>
        </form>

        <div className="result-message">
          {result && (
            <span className={result.includes("Successfully") ? "success" : ""}>
              {result}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
