import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
function Header() {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate('/');
  };
  return (
    <header className="header">
      <h1 onClick={handleLogoClick}>EVENTIFY</h1>
    </header>
  );
}

export default Header;
