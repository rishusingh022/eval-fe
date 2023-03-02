import React from 'react';
import './Footer.css';
function Footer() {
  const [theme, setTheme] = React.useState('black');
  React.useEffect(() => {
    document.body.style.setProperty('--theme-color', `${theme}`);
  });
  const handletheme = (inputTheme) => {
    setTheme(inputTheme);
  };
  return (
    <div className="footer">
      <p>
        <strong>THEMES</strong>
      </p>
      <div className="themes">
        <div
          onClick={() => {
            handletheme('purple');
          }}
          className="purple-button"
        ></div>
        <div
          onClick={() => {
            handletheme('blue');
          }}
          className="blue-button"
        ></div>
        <div
          onClick={() => {
            handletheme('grey');
          }}
          className="grey-button"
        ></div>
      </div>
    </div>
  );
}

export default Footer;
