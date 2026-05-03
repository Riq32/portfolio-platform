import React, { useState } from 'react';
import AddProjectForm from './AddProjectForm';
import ProjectList from './ProjectList';
import './ProjectShowCase.css';

export default function ProjectShowCase() {
  const [projects, setProjects] = useState([
    { id: 1, title: 'Lexical Analyzer', description: 'Parses source code into tokens' },
    { id: 2, title: 'Pig Game', description: 'A simple dice game where a player rolls a die and accumulates points' },
    { id: 3, title: 'To Do List', description: 'Shows a list of tasks to be completed' },
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Enrique's Portfolio Platform</h1>
      </header>

      <main className="main-content">
        <AddProjectForm onAddProject={handleAddProject} />
        
        <ProjectList 
          projects={projects} 
          searchQuery={searchQuery} 
          onSearchChange={setSearchQuery} 
          onDeleteChange={(id) => {handleDeleteProject}}
        />
      </main>
    </div>
  );
}