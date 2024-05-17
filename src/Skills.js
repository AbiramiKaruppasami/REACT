import React from 'react';

function Skills() {
  return (
    <div style={{
      backgroundImage: `url('./images/Skills.jpeg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      textAlign: 'center',
      color: 'white'
    }}>
      <h1 style={{ fontSize: '60px' }}>My Skills</h1>
<p style={{ fontSize: '55px' }}> {/* Adjust the font size here */}
  JAVA <br />
  PYTHON BASICS <br />
  HTML <br />
  DJANGO <br />
  CLOUD COMPUTING
</p>
    </div>
  );
}

export default Skills;
