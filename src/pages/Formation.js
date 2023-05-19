import React from 'react';
import { useTrail, animated } from 'react-spring';
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

  const formations = [
    {
      title: 'Ecole nationnale des sciences appliqués El jadida',
      subtitle: 'Cycle préparatoire',
      description: 'De 2020 à 2022',
    },
    {
      title: 'Ecole nationnale des sciences appliqués El jadida',
      subtitle: 'Cycle ingénieur',
      description: 'De 2022 à présent',
    },
    // Ajoutez plus de formations selon vos besoins
  ];

  const trail = useTrail(formations.length, {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 600, // Augmentez cette valeur pour ralentir l'apparition
  });

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Formations</h1>
      {trail.map((props, index) => (
        <animated.div key={index} style={{ ...formationContainerStyle, ...props }}>
          <h2 style={formationTitleStyle}>
            <img src={myImage} alt="Votre image" style={logoStyle} />
            {formations[index].title}
          </h2>
          <h3 style={formationSubtitleStyle}>{formations[index].subtitle}</h3>
          <p style={formationDescriptionStyle}>{formations[index].description}</p>
        </animated.div>
      ))}
    </div>
  );
}

export default Formation;
