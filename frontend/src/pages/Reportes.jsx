import React, { useState } from 'react';
import client from '../api/client';

export default function Reportes(){
  const [fi, setFi] = useState('');
  const [ff, setFf] = useState('');
  const [estado, setEstado] = useState('');
  const [data, setData] = useState([]);

  const generar = async () => {
    try {
      const res = await client.get('/api/expedientes/reportes/data', {
        params: { fechaInicio: fi, fechaFin: ff, estado: estado || undefined }
      });
      setData(res.data);
    } catch (err) {
      alert(err.response?.data?.error || err.message);
    }
  };

  return (
    <div>
      <h2>Reportes</h2>
      <div>
        <input type="date" value={fi} onChange={e=>setFi(e.target.value)} />
        <input type="date" value={ff} onChange={e=>setFf(e.target.value)} />
        <select value={estado} onChange={e=>setEstado(e.target.value)}>
          <option value="">Todos</option>
          <option value="REGISTRADO">REGISTRADO</option>
          <option value="EN_REVISION">EN_REVISION</option>
          <option value="APROBADO">APROBADO</option>
          <option value="RECHAZADO">RECHAZADO</option>
        </select>
        <button onClick={generar}>Generar</button>
      </div>

      <table className="table">
        <thead><tr><th>ID</th><th>Código</th><th>Fecha</th><th>Estado</th><th>Técnico</th></tr></thead>
        <tbody>
          {data.map(r => (
            <tr key={r.Id}><td>{r.Id}</td><td>{r.Codigo}</td><td>{new Date(r.FechaRegistro).toLocaleString()}</td><td>{r.Estado}</td><td>{r.Tecnico}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
