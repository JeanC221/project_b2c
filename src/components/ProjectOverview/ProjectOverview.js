import React from 'react';
import './ProjectOverview.css';

function ProjectOverview() {
  return (
    <section id="overview" className="project-overview">
      <h2>Visión General del Proyecto</h2>
      <div className="overview-grid">
        <div className="overview-item">
          <h3>Requerimientos y Planeación</h3>
          <p>10 días de análisis y planificación detallada</p>
        </div>
        <div className="overview-item">
          <h3>Modelado</h3>
          <p>60 días de diseño y modelado de sistemas</p>
        </div>
        <div className="overview-item">
          <h3>Implementación</h3>
          <p>30 días de desarrollo e implementación</p>
        </div>
        <div className="overview-item">
          <h3>Despliegue</h3>
          <p>15 días de pruebas y lanzamiento</p>
        </div>
      </div>
    </section>
  );
}

export default ProjectOverview;