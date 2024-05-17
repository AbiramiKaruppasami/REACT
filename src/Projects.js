import React from 'react';

function Projects() {
  return (
    <div style={{
      backgroundImage: `url('./images/Project.jpeg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      textAlign: 'center',
      color: 'white'
    }}>
      <h1 style={{ fontSize: '50px' }}>My Project</h1>
      <p style={{ fontSize: '48px' }}>GS BOT</p>
      <p style={{ fontSize: '45px' }}>I have created a user friendly chatbot which gives necessary reliable and up to date information about government schemes for the queries of the user</p>
      <p style={{ fontSize: '44px' }}>Technical stack used</p>
      <p style={{ fontSize: '42px' }}>Html</p>
      <p style={{ fontSize: '42px' }}>Django</p>
      <p style={{ fontSize: '42px' }}>Python</p>
    </div>
  );
}

export default Projects;

