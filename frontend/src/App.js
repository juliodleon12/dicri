import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ExpedientesList from './pages/ExpedientesList';
import ExpedienteForm from './pages/ExpedienteForm';
import IndiciosForm from './pages/IndiciosForm';
import Revision from './pages/Revision';
import Reportes from './pages/Reportes';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/login" element={<Login />} />

          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/expedientes" element={<ExpedientesList />} />
            <Route path="/expedientes/nuevo" element={<ExpedienteForm />} />
            <Route path="/expedientes/:id/indicios" element={<IndiciosForm />} />
            <Route path="/revision" element={<Revision />} />
            <Route path="/reportes" element={<Reportes />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}
