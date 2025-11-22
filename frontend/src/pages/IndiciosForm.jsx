import React, { useState } from 'react';
import client from '../api/client';
import { useParams } from 'react-router-dom';

export default function IndiciosForm(){
  const { id } = useParams();
  const [descripcion,setDescripcion] = useState('');
  const [color,setColor] = useState('');
  const [tamano,setTamano] = useState('');
  const [peso,setPeso] = useState('');
  const [ubicacion,setUbicacion] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    try {
      await client.post('/api/indicios', {
        expedienteId: parseInt(id),
        descripcion, color, tamano, peso, ubicacion,
        tecnicoId: 1 // ajustar según tu usuario autenticado
      });
      alert('Indicio creado');
    } catch (err) {
      alert(err.response?.data?.error || err.message);
    }
  };

  return (
    <div className="card">
      <h2>Agregar indicio a expediente {id}</h2>
      <form onSubmit={submit}>
        <textarea placeholder="Descripción" value={descripcion} onChange={e=>setDescripcion(e.target.value)} />
        <input placeholder="Color" value={color} onChange={e=>setColor(e.target.value)} />
        <input placeholder="Tamaño" value={tamano} onChange={e=>setTamano(e.target.value)} />
        <input placeholder="Peso" value={peso} onChange={e=>setPeso(e.target.value)} />
        <input placeholder="Ubicación" value={ubicacion} onChange={e=>setUbicacion(e.target.value)} />
        <button type="submit">Agregar indicio</button>
      </form>
    </div>
  );
}
