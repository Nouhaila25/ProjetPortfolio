import React from 'react';
import myImage from './ana.jpeg';
import myCV from './cv nouhaila.pdf'

const Accueil = () => {
  return (
    <div style={styles.accueilContainer}>
      <h1 style={styles.title}>Accueil</h1>
      <div style={styles.imageContainer}>
        <img src={myImage} alt="Votre image" style={styles.image} />
      </div>
      <p style={styles.paragraph}>Bonjour, Je suis KHABBACHI Nouhaila, une étudiante à l'ENSA El jadida .</p>
      <p style={styles.paragraph}>Je suis spécialisée dans le domaine d'informatique .</p>
      <p style={styles.paragraph}>Sur ce site, vous pouvez découvrir mes formations, mes expérience, mes projets réalisés et mes certificats pour toute demande ou opportunité.</p>
      <a href={myCV} download style={styles.button}>Télécharger mon CV</a>
    </div>
  );
}

export default Accueil;

const styles = {
  accueilContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  image: {
    width: '300px',
    borderRadius: '50%',
  },
  paragraph: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#CDC6B2',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    textDecoration: 'none',
  },
};
