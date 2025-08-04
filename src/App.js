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
            image="/images/image5.jpg"
            bio="I design and build the parts of websites and apps that people see and use like buttons, menus, and pages. My job is to make sure everything looks good, feels smooth, and works well on all devices. I love creating clean, user-friendly experiences that make technology easier to use."
          />
          <ProfileCard 
            name="Mahlodi Sbetha"
            title="Backend Engineer"
            image="/images/image9.jpg"
            bio="I work behind the scenes to make sure apps and websites run smoothly. While others design how things look, I build the systems that power them like storing user data, handling logins, or processing payments. I enjoy solving problems and creating strong foundations that help apps work the right way, every time."
          />
          <ProfileCard 
            name="Maribe Seabela"
            title="Cloud Engineer"
            image="/images/image4.jpg"
            bio="I help companies run their apps and services on the internet instead of physical computers. I make sure everything works smoothly, loads quickly, and stays online. Think of me like the person who builds and takes care of the digital space where websites and apps live. I enjoy solving problems and making things work better and faster."
          />
        </div>
      </header>
    </div>
  );
}

export default App;