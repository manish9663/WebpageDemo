import React, { Component } from "react";
import "./NavbarStyles.css"
import { MenuIcons, MenuIconsMedia, MenuItems } from "./MenuItems";
import {Link} from "react-router-dom";

class Navbar extends Component{



    state = {clicked: false};
    handleClick = () =>{
        this.setState({ clicked: !this.state.clicked })
    }
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo"><a className="navbar-logo" href="/">f.</a></h1>

                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                <ul className="nav-menu">
                    <div className={this.state.clicked ? "nav-menu-1 active" : "nav-menu-1"}>
                        {MenuItems.map((item, index) =>{
                            return(
                                <li key={index}>
                                    <Link className={item.cName} to={item.url}>
                                    {item.title}<i className={item.icon}></i>
                                    </Link>
                                </li>    
                            )
                        })}
                        <button className="login-button">LOG IN</button>
                        <button className="register-button">Register</button>
                    </div>
                    <div className="nav-menu-2">
                        {MenuIcons.map((item, index) =>{
                        return(
                            <li key={index}>
                            <Link className={item.cName} to={item.url}>
                                <i className={item.icon}></i>
                            </Link>
                        </li>   
                        )
                    })}

                    </div>
                </ul>
            </nav>
        )
    }
}

export default Navbar;