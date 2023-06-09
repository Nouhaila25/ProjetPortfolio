import React from 'react';
import { useTrail, animated } from 'react-spring';
import { FaGithub } from 'react-icons/fa';

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
    display: 'flex',
    alignItems: 'center',
  };

  const descriptionStyle = {
    fontSize: '14px',
    lineHeight: '1.5',
  };

  const projects = [
    {
      title: 'Projet de gestion des salles et des machines',
      githubLink: 'https://github.com/Nouhaila25/projet.Laravel.git',
      description:
        "Dans ce projet nous avons réalisé un site web qui permet de gérer les salles et les machines, aussi s'authentifier comme est on un administrateur ou un utilisateur normale, ce projet est réalisé par Laravel.",
    },
    {
      title: 'Projet Pokemon',
      githubLink: 'https://github.com/Nouhaila25/Projet_Pokemon.git',
      description:
        "Dans ce projet nous avons réalisé une application React Native qui utilise l'API Pokédex pour afficher une liste de Pokémon sous forme de cartes. Lorsque l'utilisateur clique sur une carte, un popup doit apparaître affichant les caractéristiques du Pokémon sélectionné, telles que le nom, le type, l'image, la taille et le poids.",
    },
    // Ajoutez plus de projets selon vos besoins
  ];

  const trail = useTrail(projects.length, {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { mass: 1, tension: 2000, friction: 150 },
  });

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Projets</h1>
      {trail.map((props, index) => (
        <animated.div key={index} style={{ ...projetContainerStyle, ...props }}>
          <h2 style={projetTitleStyle}>{projects[index].title}</h2>
          <a href={projects[index].githubLink} style={lienStyle} target="_blank" rel="noopener noreferrer">
            <FaGithub style={{ marginRight: '5px' }} /> Lien vers le projet
          </a>
          <p style={descriptionStyle}>{projects[index].description}</p>
        </animated.div>
      ))}
    </div>
  );
}

export default Projets;
