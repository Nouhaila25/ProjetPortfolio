import React from 'react';
import myImage from './logoEnsaj.png';

function Formation() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const formationContainerStyle = {
    backgroundColor: '#CDC6B2',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '80%',
    maxWidth: '600px',
  };

  const formationTitleStyle = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const logoStyle = {
    marginRight: '10px',
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    objectFit: 'cover',
  };

  const formationSubtitleStyle = {
    fontSize: '16px',
    marginBottom: '10px',
  };

  const formationDescriptionStyle = {
    fontSize: '14px',
    lineHeight: '1.5',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Formations</h1>
      <div style={formationContainerStyle}>
        <h2 style={formationTitleStyle}>
          <img src={myImage} alt="Votre image"  style={logoStyle} />
          Ecole nationnale des sciences appliqués El jadida
        </h2>
        <h3 style={formationSubtitleStyle}>Cycle péparatoire</h3>
        <p style={formationDescriptionStyle}>
           De 2020 à 2022
        </p>
      </div>
      <div style={formationContainerStyle}>
        <h2 style={formationTitleStyle}>
          <img src={myImage} alt="Votre image"  style={logoStyle} />
          Ecole nationnale des sciences appliqués El jadida
        </h2>
        <h3 style={formationSubtitleStyle}>Cycle ingénieur</h3>
        <p style={formationDescriptionStyle}>
          De 2022 à present
        </p>
      </div>
      {/* Ajoutez plus de formations selon vos besoins */}
    </div>
  );
}

export default Formation;
