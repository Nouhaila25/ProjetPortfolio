import React from 'react';

function Header() {
  const headerStyle = {
    backgroundColor: '#f2f2f2',
    padding: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const menuStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    listStyle: 'none',
    margin: '0',
    padding: '0',
    
  };

  const menuItemStyle = {
    marginLeft: '10px',
    fontSize: '14px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  };

  const menuItemLinkStyle = {
    textDecoration: 'none',
    color: '#333333',
    padding: '5px 10px',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
  };

  const menuItemLinkHoverStyle = {
    backgroundColor: '#eeeeee',
  };

  return (
    <header style={headerStyle}>
      <nav>
        <ul style={menuStyle}>
          <li style={menuItemStyle}>
            <a href="/" style={menuItemLinkStyle}>
              Accueil
            </a>
          </li>
          <li style={menuItemStyle}>
            <a href="/formations" style={menuItemLinkStyle}>
              Formations
            </a>
          </li>
          <li style={menuItemStyle}>
            <a href="/competences" style={menuItemLinkStyle}>
              Competences
            </a>
          </li>
          <li style={menuItemStyle}>
            <a href="/projets" style={menuItemLinkStyle}>
              Projets
            </a>
          </li>
          <li style={menuItemStyle}>
            <a href="/certificats" style={menuItemLinkStyle}>
              Certificats
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
