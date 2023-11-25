import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <footer>
      <section className="copyright">&copy; 2023 Zaid Khamis</section>
      <section className="mail-issues">
        <a href="mailto:zaidhkhamis@gmail.com?subject=Portfolio Site Issue">
          Having issues?
        </a>
      </section>
    </footer>
  );
};

// todo: optional -> adding links and/or social icons + links
function SocialCard() {
  // add icon and ?tag + link those
  return <div></div>;
}
