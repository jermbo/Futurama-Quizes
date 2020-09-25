import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <nav>
        <Link to="/">Welcome Screen</Link>
      </nav>
      <p>Made with React &amp; TypeScript</p>
    </footer>
  );
};
