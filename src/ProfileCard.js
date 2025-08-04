// ProfileCard.js - Reusable profile card component for team members
import React from 'react';
import './ProfileCard.css';

function ProfileCard(props) {
  return (
    <div className="profile-card">
      <img 
        src={props.image} 
        alt={`${props.name} profile`}
        className="profile-image"
      />
      <h2 className="profile-name">{props.name}</h2>
      <h4 className="profile-title">{props.title}</h4>
      <p className="profile-bio">{props.bio}</p>
    </div>
  );
}

export default ProfileCard;