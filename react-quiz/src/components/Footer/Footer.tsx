import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import './Footer.scss';

const Footer: React.FC = () => {
  const {userInfo} = useContext(GlobalContext)

  return  (
    <footer>
      <p>Made with HTML / CSS / React / TypeScript | {userInfo.name}</p>
    </footer>
  );
}

export default Footer;
