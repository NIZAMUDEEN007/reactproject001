import React from 'react';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FacebookIcon style={{color:'#cdcccd', fontSize: '30px'}}/>
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <TwitterIcon  style={{color:'#cdcccd', fontSize: '30px'}}/>
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <YouTubeIcon style={{color:'#cdcccd', fontSize: '30px'}}/>
        </a>
      </div>
      <div className="about-us">
        <p className="about-us-description">
          © 2023, Epic Games, Inc. All rights reserved. Epic, Epic Games, the Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament logo are trademarks or registered trademarks of Epic Games, Inc. in the United States of America and elsewhere. Other brands or product names are the trademarks of their respective owners.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
