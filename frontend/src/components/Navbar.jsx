import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Navbar(){
  const { user, logout } = useContext(AuthContext);
  const nav = useNavigate();

  const doLogout = () => {
    logout();
    nav('/login');
  };

  return (
    <nav className="nav">
      <div className="nav-left">
        <Link to="/dashboard">DICRI</Link>
      </div>
      <div className="nav-right">
        {user ? (
          <>
            <span>{user.nombre} ({user.rol})</span>
            <button onClick={doLogout}>Salir</button>
          </>
        ) : (
          <Link to="/login">Ingresar</Link>
        )}
      </div>
    </nav>
  );
}
