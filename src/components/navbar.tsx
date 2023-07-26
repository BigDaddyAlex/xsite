import "bootstrap/dist/css/bootstrap.css";
import { NavLink, useNavigate } from 'react-router-dom';

import { Button } from '@aws-amplify/ui-react';
import React from 'react';


export const Navbar = (props: any) => {
  let navigate = useNavigate();

  const ModalHandler = () => {
    navigate("auth")
  }

//   async function isSignedin() {
//     try {
//         await Auth.currentAuthenticatedUser();
//         return true;
//     } catch {
//         return false;
//     }
// }


  function getRightButton() {
    if (props.signOut) {
      return <Button variation="primary"
        loadingText=""
        size="small"
        ariaLabel="" onClick={props.signOut }>Sign out</Button>
    } else {
      return <Button variation="primary"
        loadingText=""
        size="small"
        ariaLabel="" onClick={ModalHandler} >
        Log in
      </Button>
    }
  }

  return (
    <div>
      <nav className="navbar bg-black p-2 align-items-end border-bottom">
        <NavLink className="navbar-brand" to="/">
          <img className="img-fluid " style={{ height: 35 }} src="/logo-transparent-bg.png" />
        </NavLink>
        <NavLink className="navbar-nav h5 text-white text-decoration-none" to="">
          Home
        </NavLink>
        <NavLink className="navbar-nav h5 text-white text-decoration-none " to="/creator">
          About
        </NavLink>
        <NavLink className="navbar-nav h5 text-white text-decoration-none" to="/Contact">
          Contact
        </NavLink>
        {getRightButton()}
      </nav>
    </div>
  );
}

export default (Navbar);