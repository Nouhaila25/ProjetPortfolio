import React, { useState } from 'react';
import myImage1 from './certifaicate JAVA FX.jpg';
import myImage2 from './wordpress.png';


function Certificates() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    width: '100%',
    textAlign: 'center',
  };

  const certificateContainerStyle = {
    flex: '0 0 45%',
    marginBottom: '20px',
    cursor: 'pointer',
  };

  const certificateImageStyle = {
    width: '100%',
    maxHeight: '500px',
    objectFit: 'contain',
  };

  const modalContainerStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const modalContentStyle = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '80%',
    maxHeight: '80%',
    overflow: 'auto',
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage('');
  };

  const openModal = (image) => {
    setModalOpen(true);
    setSelectedImage(image);
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Certificats</h1>
      {modalOpen && (
        <div style={modalContainerStyle} onClick={closeModal}>
          <div style={modalContentStyle}>
            <img src={selectedImage} alt="Certificat" style={{ maxWidth: '100%', maxHeight: '100%' }} />
          </div>
        </div>
      )}
      <div style={certificateContainerStyle} onClick={() => openModal(myImage1)}>
        <img src={myImage1} alt="Certificat" style={certificateImageStyle} />
      </div>
      <div style={certificateContainerStyle} onClick={() => openModal(myImage2)}>
        <img src={myImage2} alt="Certificat" style={certificateImageStyle} />
      </div>
    </div>
  );
}

export default Certificates;
