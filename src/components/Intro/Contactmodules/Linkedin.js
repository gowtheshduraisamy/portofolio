import React from 'react';
import Linkedins from "@iconscout/react-unicons/icons/uil-linkedin"

const Linkedin = ({  }) => {
  const handleChatClick = () => {
    const url = `https://www.linkedin.com/in/gowthesh-d-9a52591b2/`;
    window.open(url, '_blank');
  };

  return (
    // <button onClick={handleChatClick}>Chat via WhatsApp</button>
    <Linkedins color="black" size="3rem" onClick={handleChatClick} style={{cursor:"pointer"}}/>

  );
};

export default Linkedin;