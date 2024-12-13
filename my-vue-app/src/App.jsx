import React from 'react';
import DatosPersonales from './components/DatosPersonales';
import ListaEstudios from './components/ListaEstudios';
import ListaHerramientas from './components/ListaHerramientas';
import GaleriaDeportes from './components/GaleriaDeportes';

const App = () => {
  return (
    <div style={{ backgroundColor: '#f9f9f9', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Mi Proyecto React</h1>
      <DatosPersonales />
      <ListaEstudios />
      <ListaHerramientas />
      <GaleriaDeportes />
    </div>
  );
};

export default App;
