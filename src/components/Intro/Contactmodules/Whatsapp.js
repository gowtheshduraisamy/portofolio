import React from 'react';
import Whatsapps from "@iconscout/react-unicons/icons/uil-whatsapp"

const Whatsapp = ({ phoneNumber }) => {
  const handleChatClick = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(url, '_blank');
  };

  return (
    // <button onClick={handleChatClick}>Chat via WhatsApp</button>
    <Whatsapps color="black" size="3rem" onClick={handleChatClick} style={{cursor:"pointer"}}/>

  );
};

export default Whatsapp;