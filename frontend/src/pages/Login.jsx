import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Login(){
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const nav = useNavigate();
  const [err,setErr] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      nav('/dashboard');
    } catch (error) {
      setErr(error.response?.data?.error || error.message);
    }
  };

  return (
    <div className="card">
      <h2>Iniciar sesión</h2>
      {err && <div className="err">{err}</div>}
      <form onSubmit={submit}>
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <input placeholder="Contraseña" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}
