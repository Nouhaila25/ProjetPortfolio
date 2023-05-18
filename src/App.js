import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import Formation from './pages/Formation';
import Projets from './pages/Projets';
import Experience from './pages/Experience';
import Certificate from './pages/Certificate';

function App() {
  const getPageContent = () => {
    const currentPath = window.location.pathname;

    switch (currentPath) {
      case '/':
        return <Accueil />;
      case '/formations':
        return <Formation/>;
      case '/experiences':
        return <Experience/>;
      case '/projets':
        return <Projets />;
      case '/certificats':
        return < Certificate/>;
      default:
        return <Accueil />;
    }
  };

  return (
    <div>
      <Header />
      {getPageContent()}
      <Footer />
    </div>
  );
}

export default App;