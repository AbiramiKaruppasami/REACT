import React from 'react';

function AboutMe() {
  return (
    <div style={{
      backgroundImage: `url('./images/Aboutme.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      textAlign: 'center',
      color: 'white',
      position: 'relative'
    }}>
      <h1 style={{ fontSize: '60px' }}>HELLO!<br />
      I'm Abirami K
      </h1>
      <p style={{ fontSize: '35px', margin: '40px 0' }}>Currently pursuing B.E EEE third year and looking forward to exploring the world of IT.
       I'm passionate about technology, and also iam a  quick learner, and ready to contribute to innovative projects.</p>
      <p style={{ fontSize: '40px' }}>Let's connect and explore opportunities together!</p>
      <div style={{
        position: 'absolute',
        bottom: '10px', // Adjust the bottom position as needed
        right: '10px', // Adjust the right position as needed
        textAlign: 'right'
      }}>
        <p style={{ fontSize: '30px' }}>Contact me with</p>
        <p style={{ fontSize: '30px' }}>Email: abirami@example.com</p>
        <p style={{ fontSize: '30px' }}>Phone: +123456789</p>
      </div>
    </div>
  );
}

export default AboutMe;
