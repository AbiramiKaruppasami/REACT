import React from 'react';

function Home() {
  return (
    <div style={{
      backgroundImage: `url('./images/Home.jpeg')`, // Adjust the path to your image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      color: 'white' // assuming a dark background image
    }}>
      <h1 style={{ fontSize: '45px' }}>Welcome to My Portfolio!!</h1>
      <p style={{ fontSize: '50px' }}>I am</p>
      <p style={{ fontSize: '50px' }}>ABIRAMI K</p>
    </div>
  );
}

export default Home;
