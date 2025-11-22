import React, { useEffect, useState } from 'react';
import client from '../api/client';

export default function Revision(){
  const [expedientes, setExpedientes] = useState([]);

  useEffect(() => {
    client.get('/api/expedientes')
      .then(r => setExpedientes(r.data))
      .catch(console.error);
  }, []);

  const changeEstado = async (id, estado) => {
    const body = estado === 'RECHAZADO' ? { estado, justificacion: prompt('Justificación:') } : { estado };
    try {
      await client.put(`/api/expedientes/${id}/estado`, body);
      alert('Estado actualizado');
      setExpedientes(expedientes.map(e => e.Id === id ? { ...e, Estado: estado } : e));
    } catch (err) {
      alert(err.response?.data?.error || err.message);
    }
  };

  return (
    <div>
      <h2>Revisión (Coordinador)</h2>
      <table className="table">
        <thead><tr><th>ID</th><th>Código</th><th>Estado</th><th>Acciones</th></tr></thead>
        <tbody>
          {expedientes.map(e => (
            <tr key={e.Id}>
              <td>{e.Id}</td>
              <td>{e.Codigo}</td>
              <td>{e.Estado}</td>
              <td>
                <button onClick={() => changeEstado(e.Id, 'APROBADO')}>Aprobar</button>
                <button onClick={() => changeEstado(e.Id, 'RECHAZADO')}>Rechazar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
