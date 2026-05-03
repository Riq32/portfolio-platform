import React from 'react';
import './ProjectItem.css';

export default function ProjectItem({ project, onDelete }) {
  return (
    <div className="project-card">
      <button 
        className="btn-delete" 
        onClick={onDelete}
      >
        Delete
      </button>
      
      <div className="project-details">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
}