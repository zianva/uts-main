import React from "react";

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: "#24204b", color: "#ffffff", padding: "20px", textAlign: "left" }}>
      <div style={{ display: "flex", justifyContent: "space-between", maxWidth: "1200px", margin: "0 auto" }}>
        {/* Logo and tagline */}
        <div>
          <h2 style={{ marginBottom: "10px", fontSize: "24px" }}>team.</h2>
          <p style={{ fontSize: "14px", color: "#c0c0c0" }}>Collaboration platform for modern team</p>
        </div>

        {/* Company Links */}
        <div>
          <h3 style={{ fontSize: "16px", marginBottom: "10px" }}>Company</h3>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "14px", color: "#c0c0c0" }}>
            <li style={{ marginBottom: "5px" }}>Product</li>
            <li style={{ marginBottom: "5px" }}>Blog</li>
            <li>Support</li>
          </ul>
        </div>

        {/* Features Links */}
        <div>
          <h3 style={{ fontSize: "16px", marginBottom: "10px" }}>Features</h3>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "14px", color: "#c0c0c0" }}>
            <li style={{ marginBottom: "5px" }}>Screen Sharing</li>
            <li style={{ marginBottom: "5px" }}>iOS & Android Apps</li>
            <li style={{ marginBottom: "5px" }}>File Sharing</li>
            <li>User Management</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 style={{ fontSize: "16px", marginBottom: "10px" }}>Contact Us</h3>
          <p style={{ fontSize: "14px", color: "#c0c0c0" }}>info@teamapp.com</p>
          <p style={{ fontSize: "14px", color: "#c0c0c0" }}>1-800-200-300</p>
          <p style={{ fontSize: "14px", color: "#c0c0c0" }}>1010 Sunset Blvd, Palo Alto, California</p>
        </div>

        {/* Stay up to date */}
        <div>
          <h3 style={{ fontSize: "16px", marginBottom: "10px" }}>Stay up to date</h3>
          <form>
            <input
              type="email"
              placeholder="Email"
              style={{
                padding: "10px",
                borderRadius: "4px",
                border: "none",
                marginRight: "10px",
                fontSize: "14px"
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "#4b5bec",
                color: "#ffffff",
                padding: "10px 20px",
                border: "none",
                borderRadius: "4px",
                fontSize: "14px"
              }}
            >
              ➔
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Section */}
      <div style={{ textAlign: "center", marginTop: "20px", fontSize: "12px", color: "#c0c0c0" }}>
        © Copyright Team Inc.
      </div>
    </footer>
  );
};

export default Footer;
