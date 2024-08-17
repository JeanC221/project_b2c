import React from 'react';
import './Features.css';

function Features() {
  return (
    <section id="features" className="features">
      <h2>Características Principales</h2>
      <div className="features-grid">
        <div className="feature-item">
          <h3>Gestión de Clientes</h3>
          <p>Sistema avanzado para administrar información de clientes</p>
        </div>
        <div className="feature-item">
          <h3>Gestión de Pedidos</h3>
          <p>Seguimiento eficiente de pedidos desde la creación hasta la entrega</p>
        </div>
        <div className="feature-item">
          <h3>Gestión de Facturas</h3>
          <p>Generación automática y gestión de facturas</p>
        </div>
      </div>
    </section>
  );
}

export default Features;