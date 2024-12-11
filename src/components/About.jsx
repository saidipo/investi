import React from 'react';

const About = () => {
  // Inline styles for sections
  const sectionStyle = {
    backgroundColor: 'white',
    padding: '30px 20px',
    border: '2px solid #20B486',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    marginBottom: '30px',
    transition: 'box-shadow 0.3s ease',
  };

  const headingStyle = {
    color: '#20B486',
    fontSize: '2rem',  // Reduced font size
    fontWeight: '600',  // Slightly lighter font weight
    marginBottom: '16px',
  };

  const paragraphStyle = {
    color: '#333',
    fontSize: '1rem',  // Reduced font size
    lineHeight: '1.5',
    marginBottom: '16px',
  };

  const listItemStyle = {
    color: '#333',
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '8px',
  };

  return (
    <div className="w-full flex flex-col gap-8 px-4 py-6">
      {/* About Us Section */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>About Us</h2>
        <p style={paragraphStyle}>
          At Investi.tn, we connect entrepreneurs and investors to make innovation thrive. Our platform provides the perfect space to discover new opportunities and unlock business potential.
        </p>
        <p style={paragraphStyle}>
          We simplify the process of finding funding and partnerships for startups and emerging businesses.
        </p>
      </div>

      {/* What We Do Section */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>What We Do</h2>
        <p style={paragraphStyle}>
          Our platform connects entrepreneurs with investors in a simple, effective, and scalable way. We offer a seamless experience to foster collaboration, growth, and business success.
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Why Choose Us</h2>
        <ul>
          <li style={listItemStyle}>Tailored matchmaking between entrepreneurs and investors</li>
          <li style={listItemStyle}>A growing network of innovative businesses</li>
          <li style={listItemStyle}>Supportive ecosystem for business success</li>
          <li style={listItemStyle}>User-friendly and accessible platform</li>
        </ul>
      </div>

      {/* Our Vision Section */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Our Vision</h2>
        <p style={paragraphStyle}>
          We envision a world where innovation and collaboration are the driving forces behind every successful venture. Our goal is to build a global community of entrepreneurs and investors who work together to create meaningful impact.
        </p>
      </div>
    </div>
  );
};

export default About;
