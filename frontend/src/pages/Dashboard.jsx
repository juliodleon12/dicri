import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard(){
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="grid">
        <Link to="/expedientes">Ver Expedientes</Link>
        <Link to="/expedientes/nuevo">Crear Expediente</Link>
        <Link to="/revision">Revisión (Coordinador)</Link>
        <Link to="/reportes">Reportes</Link>
      </div>
    </div>
  );
}
