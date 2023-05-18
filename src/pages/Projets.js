import React from 'react';

function Projets() {
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

  const projetContainerStyle = {
    backgroundColor: '#CDC6B2',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '80%',
    maxWidth: '600px',
  };

  const projetTitleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const lienStyle = {
    fontSize: '16px',
    color: 'blue',
    textDecoration: 'underline',
    marginBottom: '10px',
  };

  const descriptionStyle = {
    fontSize: '14px',
    lineHeight: '1.5',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Projets</h1>
      <div style={projetContainerStyle}>
        <h2 style={projetTitleStyle}>Projet de gestion des salles et des machines</h2>
        <a href="https://github.com/Nouhaila25/projet.Laravel.git" style={lienStyle} target="_blank" rel="noopener noreferrer">Lien vers le projet</a>
        <p style={descriptionStyle}>
          Dans ce projet nous avons réalisés un site web qui permet de gérer les salles et les machines, aussi s'authentifier comme est on 
          un administrateur ou un utilisateur normale , ce projet la est réaliser par Laravel 
        </p>
      </div>
      <div style={projetContainerStyle}>
        <h2 style={projetTitleStyle}>Projet Pokemon</h2>
        <a href="https://github.com/Nouhaila25/Projet_Pokemon.git" style={lienStyle} target="_blank" rel="noopener noreferrer">Lien vers le projet</a>
        <p style={descriptionStyle}>
          Dans ce projet nous avons réalisés une application React Native qui utilise l'API Pokédex pour afficher une liste de Pokémon
          sous forme de cartes. Lorsque l'utilisateur clique sur une carte, un popup doit apparaître
          affichant les caractéristiques du Pokémon sélectionné, telles que le nom, le type, l'image, la
          taille et le poids.
        </p>
      </div>
      {/* Ajoutez plus de projets selon vos besoins */}
    </div>
  );
}

export default Projets;
