import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import './Footer.scss';

const Footer = () => {
  const {userScore} = useContext(GlobalContext)

  return  (
    <footer>
      <p>Made with HTML / CSS / React / TypeScript / {userScore > 0 && userScore}</p>
    </footer>
  );
}

export default Footer;
