import React from "react";
import { Link } from "react-router-dom";
import './header.css'

const Header = () =>{


    return (

        <div className = 'header'>
            
           <header>
              <nav>
                  <ul>
                      <li><Link to= "/home">Accueil</Link></li>
                      <li><Link to = "/services">Services</Link></li>
                      <li><Link to = "/contact">Contact</Link></li>
                      <li><Link to = "/connexion">connexion</Link></li>
                      <li><Link to = "/inscription">Inscription</Link></li>
                  </ul>
              </nav>
           </header>
        
        </div>
    );
         
} 

export default Header