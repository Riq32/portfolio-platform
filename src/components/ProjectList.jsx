import React from 'react';
import ProjectItem from './ProjectItem';
import './ProjectList.css';

export default function ProjectList({ projects, searchQuery, onSearchChange, onDeleteProject }) {
  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="project-list-section">
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search Projects"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      
      <div className="project-list">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectItem 
              key={project.id} 
              project={project} 
            onDelete={() => onDeleteProject(project.id)}
            />
          ))
        ) : (
          <p className="empty-state">No projects found.</p>
        )}
      </div>
    </section>
  );
}