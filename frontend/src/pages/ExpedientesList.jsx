import React, { useEffect, useState } from 'react';
import client from '../api/client';
import { Link } from 'react-router-dom';

export default function ExpedientesList(){
  const [list, setList] = useState([]);

  useEffect(() => {
    client.get('/api/expedientes')
      .then(r => setList(r.data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2>Expedientes</h2>
      <Link to="/expedientes/nuevo">+ Nuevo</Link>
      <table className="table">
        <thead><tr><th>ID</th><th>Código</th><th>Técnico</th><th>Estado</th><th>Acciones</th></tr></thead>
        <tbody>
          {list.map(e => (
            <tr key={e.Id}>
              <td>{e.Id}</td>
              <td>{e.Codigo}</td>
              <td>{e.Tecnico}</td>
              <td>{e.Estado}</td>
              <td>
                <Link to={`/expedientes/${e.Id}/indicios`}>Indicios</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
