import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import myImage from './ana.jpeg';
import myCV from './cv nouhaila.pdf';

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

const Accueil = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [textAnimation, setTextAnimation] = useState('');
  
  useEffect(() => {
    setIsAnimated(true);
    const text = "Bonjour, Je suis KHABBACHI Nouhaila, une étudiante à l'ENSA El jadida.<br>Je suis spécialisée dans le domaine d'informatique.<br>Sur ce site, vous pouvez découvrir mes formations, mes expériences, mes projets réalisés et mes certificats pour toute demande ou opportunité.";
    let currentIndex = 0;
    const interval = setInterval(() => {
      setTextAnimation(text.substring(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === text.length) {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const imageAnimation = useSpring({
    opacity: isAnimated ? 1 : 0,
    transform: isAnimated ? 'translateY(0)' : 'translateY(50px)',
  });

  const buttonAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 1000,
  });

  return (
    <div style={styles.accueilContainer}>
      <h1 style={styles.title}>Accueil</h1>
      <div style={styles.imageContainer}>
        <animated.img
          src={myImage}
          alt="Votre image"
          style={{ ...styles.image, ...imageAnimation }}
        />
      </div>
      <animated.p
        style={{ ...styles.paragraph }}
        dangerouslySetInnerHTML={{ __html: textAnimation }}
      ></animated.p>
      <animated.a
        href={myCV}
        download
        style={{ ...styles.button, ...buttonAnimation }}
      >
        Télécharger mon CV
      </animated.a>
    </div>
  );
};

export default Accueil;
