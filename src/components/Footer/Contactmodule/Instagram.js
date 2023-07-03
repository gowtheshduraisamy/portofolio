import React from 'react';
import Instagrams from "@iconscout/react-unicons/icons/uil-instagram"

const Instagram = ({}) => {
  const handleChatClick = () => {
    const url = `https://www.instagram.com/gowthesh.d/`;
    window.open(url, '_blank');
  };

  return (
    // <button onClick={handleChatClick}>Chat via WhatsApp</button>
    <Instagrams color="white" size="3rem" onClick={handleChatClick} style={{cursor:"pointer"}}/>

  );
};

export default Instagram;