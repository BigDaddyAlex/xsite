import "bootstrap/dist/css/bootstrap.css";
import { NavLink, useNavigate } from 'react-router-dom';

import { Button } from '@aws-amplify/ui-react';
import React from 'react';


export const Navbar = (props: any) => {
  let navigate = useNavigate();

  const ModalHandler = () => {
    navigate("auth")
  }


  

  return (
    <div>
      <nav className="navbar bg-black p-2 align-items-end border-bottom">
        <NavLink className="navbar-brand" to="/">
          <img className="img-fluid " style={{ height: 35 }} src="/logo-transparent-bg.png" />
        </NavLink>
        
      </nav>
    </div>
  );
}

export default (Navbar);