import React, { useState } from 'react';
import './AddProjectForm.css';

export default function AddProjectForm({ onAddProject }) {
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    onAddProject({
      id: Date.now(),
      title: newTitle,
      description: newDescription,
    });

    setNewTitle('');
    setNewDescription('');
  };

  return (
    <section className="add-project-section">
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit} className="add-project-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows={3}
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-add">
          Add
        </button>
      </form>
    </section>
  );
}