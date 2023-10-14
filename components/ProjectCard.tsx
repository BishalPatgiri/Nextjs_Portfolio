import React from 'react';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={styles.card}>
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectCard;
