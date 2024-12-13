import React from 'react';

const GaleriaDeportes = () => {
  const deportes = [
    { titulo: 'Fútbol', imagen: 'https://1.bp.blogspot.com/-bN40rXO05Xs/X0IbppH1S5I/AAAAAAAAf6k/_V9_RsSnEo4IBELPbRb_8AtPWyJaeZ0EgCNcBGAsYHQ/s2048/enner-valencia-coronavirus.jpg' },
    { titulo: 'Básquetbol', imagen: 'https://th.bing.com/th/id/R.d044b7ef06658fa153b3b50178a7053c?rik=ALEMGlFO%2f%2fOmCA&pid=ImgRaw&r=0' },
    { titulo: 'Ecuavolley', imagen: 'https://www.ecuavisa.com/binrepository/800x501/0c3/800d495/none/11705/MFHV/09-06-2019-ecuavoley-alborada_EC497326_MG932359.jpg' },
  ];

  return (
    <div>
      <h2>Deportes Favoritos</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        {deportes.map((deporte, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <img src={deporte.imagen} alt={deporte.titulo} style={{ borderRadius: '10px', width: '150px' }} />
            <p>{deporte.titulo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GaleriaDeportes;
