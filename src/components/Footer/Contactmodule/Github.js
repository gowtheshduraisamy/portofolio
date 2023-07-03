import React from 'react';
import Githubs from "@iconscout/react-unicons/icons/uil-github"

const Github = ({  }) => {
  const handleChatClick = () => {
    const url = `https://github.com/gowtheshduraisamy`;
    window.open(url, '_blank');
  };

  return (
    // <button onClick={handleChatClick}>Chat via WhatsApp</button>
    <Githubs color="white" size="3rem" onClick={handleChatClick} style={{cursor:"pointer"}}/>

  );
};

export default Github;