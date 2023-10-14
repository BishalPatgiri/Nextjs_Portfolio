import React from 'react';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects';
import styles from '../styles/Projects.module.css';

const Projects: React.FC = () => {
  return (
    <Layout title="My Projects">
      <section className={styles.projects}>
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </Layout>
  );
};

export default Projects;
