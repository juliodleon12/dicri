import React, { useState } from 'react';
import client from '../api/client';
import { useNavigate } from 'react-router-dom';

export default function ExpedienteForm(){
  const [codigo, setCodigo] = useState('');
  const [tecnicoId, setTecnicoId] = useState('');
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      await client.post('/api/expedientes', { codigo, tecnicoId: parseInt(tecnicoId) });
      nav('/expedientes');
    } catch (err) {
      alert(err.response?.data?.error || err.message);
    }
  };

  return (
    <div className="card">
      <h2>Crear Expediente</h2>
      <form onSubmit={submit}>
        <input placeholder="Código" value={codigo} onChange={e=>setCodigo(e.target.value)} required />
        <input placeholder="TecnicoId" value={tecnicoId} onChange={e=>setTecnicoId(e.target.value)} required />
        <button type="submit">Crear</button>
      </form>
    </div>
  );
}
