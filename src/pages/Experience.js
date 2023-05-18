import React from 'react';
import myImage from './logoEnsaj.png';

function Experiences() {
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

  const experienceContainerStyle = {
    backgroundColor: '#CDC6B2',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '80%',
    maxWidth: '600px',
    display: 'flex', // Ajout de la propriété 'display' pour aligner le contenu horizontalement
    alignItems: 'center', // Alignement vertical du contenu
  };

  const experienceTitleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
    marginLeft: '10px', // Marge à gauche pour séparer le texte du logo
  };

  const logoStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '10px',
    marginRight: '10px', // Marge à droite pour séparer le logo du texte
  };

  const experienceSubtitleStyle = {
    fontSize: '16px',
    marginBottom: '10px',
  };

  const experienceDescriptionStyle = {
    fontSize: '14px',
    lineHeight: '1.5',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Expériences</h1>
      <div style={experienceContainerStyle}>
        <img src={myImage} alt="Logo entreprise" style={logoStyle} />
        <div>
          <h2 style={experienceTitleStyle}>PFA</h2>
          <h3 style={experienceSubtitleStyle}>ENSAJ</h3>
          <p style={experienceDescriptionStyle}>
            Nous avons réalisé une application desktop en utilisant JAVA pour la sécurisation de la voix IP. Cette application nécessite deux intervenants : un émetteur et un récepteur. L'émetteur enregistre un message vocal au récepteur. Ce message est chiffré selon l'algorithme (AES, DES, TDES, RC4) et la clé de chiffrement choisis, puis envoyé au récepteur en utilisant les sockets de Java. Le récepteur reçoit l'audio chiffré, le déchiffre selon l'algorithme et la clé de déchiffrement choisis afin de pouvoir l'écouter.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
