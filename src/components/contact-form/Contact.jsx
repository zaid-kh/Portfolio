import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <section className="contact-container">
      <h2>Get in touch</h2>
      <form id="contact-form" className="contact-form" onSubmit={sendMail}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Email title (e.g., Job Opportunity)"
          />
        </div>

        <div className="form-group">
          <label htmlFor="body">Message:</label>
          <textarea
            name="body"
            id="body"
            placeholder="Type your message here..."
            rows={6}
          ></textarea>
        </div>

        <div className="form-group">
          <button id="send-mail-btn" type="submit">
            Send Email
          </button>
        </div>
      </form>
    </section>
  );
};

function sendMail(event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  const mailtoLink = `mailto:zaidhkhamis@gmail.com?subject=${encodeURIComponent(
    title
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
}
