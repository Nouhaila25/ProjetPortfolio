import React from 'react';
import { useTrail, animated } from 'react-spring';
import myImage from './css.png';
import myImage1 from './html.png';
import myImage2 from './LARAVEL.jpg';
import myImage3 from './PHP-logo.png';
import myImage4 from './reactj.png';
import myImage5 from './react-native.png';
import myImage6 from './javascript.jpg';
import myImage7 from './java.webp';
import myImage8 from './python.png';

const Competences = () => {
  const logos = [
    { id: 1, name: 'Logo1' },
    // Ajoutez d'autres logos ici
  ];

  const trail = useTrail(logos.length, {
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    delay: 500,
  });

  const logoStyle = {
    width: '200px',
    height: '200px',
    marginRight: '10px',
    borderRadius: '4px',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '24px',
    marginBottom: '20px',
  };

  const logosContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '10px',
    justifyContent: 'center',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Compétences</h1>
      <div style={logosContainerStyle}>
        {trail.map((animation, index) => (
          <animated.img
            key={logos[index].id}
            src={myImage}
            alt={logos[index].name}
            style={{ ...logoStyle, ...animation }}
          />
        ))}
        {trail.map((animation, index) => (
          <animated.img
            key={logos[index].id}
            src={myImage1}
            alt={logos[index].name}
            style={{ ...logoStyle, ...animation }}
          />
        ))}
        {trail.map((animation, index) => (
          <animated.img
            key={logos[index].id}
            src={myImage2}
            alt={logos[index].name}
            style={{ ...logoStyle, ...animation }}
          />
        ))}
        {trail.map((animation, index) => (
          <animated.img
            key={logos[index].id}
            src={myImage3}
            alt={logos[index].name}
            style={{ ...logoStyle, ...animation }}
          />
        ))}
        {trail.map((animation, index) => (
          <animated.img
            key={logos[index].id}
            src={myImage4}
            alt={logos[index].name}
            style={{ ...logoStyle, ...animation }}
          />
        ))}
        {trail.map((animation, index) => (
          <animated.img
            key={logos[index].id}
            src={myImage5}
            alt={logos[index].name}
            style={{ ...logoStyle, ...animation }}
          />
        ))}
        {trail.map((animation, index) => (
          <animated.img
            key={logos[index].id}
            src={myImage6}
            alt={logos[index].name}
            style={{ ...logoStyle, ...animation }}
          />
        ))}
        {trail.map((animation, index) => (
          <animated.img
            key={logos[index].id}
            src={myImage7}
            alt={logos[index].name}
            style={{ ...logoStyle, ...animation }}
          />
        ))}
        {trail.map((animation, index) => (
          <animated.img
            key={logos[index].id}
            src={myImage8}
            alt={logos[index].name}
            style={{ ...logoStyle, ...animation }}
          />
        ))}
      </div>
    </div>
  );
};

export default Competences;
