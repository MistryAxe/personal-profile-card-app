import React from 'react';
import ProfileCard from './ProfileCard';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Our Team</h1>
        <div className="profile-cards-container">
          <ProfileCard 
            name="Evelyn Thema"
            title="Frontend Developer"
            image="/images/image1.jpg"
            bio="Passionate about creating intuitive user experiences with React and modern web technologies. Coffee enthusiast and open-source contributor."
          />
          <ProfileCard 
            name="Mahlodi Sbetha"
            title="Backend Engineer"
            image="/images/image2.jpg"
            bio="Specializes in Node.js and database optimization. Loves solving complex problems and mentoring junior developers."
          />
        </div>
      </header>
    </div>
  );
}

export default App;