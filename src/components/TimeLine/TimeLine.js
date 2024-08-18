import React from 'react';
import './TimeLine.css';

function Timeline() {
  const timelineData = [
    { phase: "Requerimientos", start: "8/12/24", end: "8/16/24" },
    { phase: "Planeación", start: "8/19/24", end: "8/23/24" },
    { phase: "Modelado", start: "8/26/24", end: "11/15/24" },
    { phase: "Diseño", start: "11/1/24", end: "11/22/24" },
    { phase: "Implementación", start: "11/25/24", end: "1/03/25" },
    { phase: "Despliegue", start: "1/06/25", end: "1/24/25" },
  ];

  return (
    <section id="timeline" className="timeline">
      <h2>Cronograma del Proyecto</h2>
      <div className="timeline-container">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item">
            <h3>{item.phase}</h3>
            <p>{item.start} - {item.end}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;