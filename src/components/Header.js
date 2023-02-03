import React, { useState } from "react";
import {useNavigate} from "react-router";
import SearchBar from "./SearchBar";
function Header() {

    const user = JSON.parse(localStorage.getItem("user"));
    // const user = JSON.parse(localStorage.getItem("user"));
    // const user = {
    //     username: "Lazare Fortune"
    // }

  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Librairie</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="/">Accueil</a>
                        <a className="nav-link" href="/about">A propos</a>
                        <a className="nav-link" href="/login">Se connecter</a>
                        <a className="nav-link" href="/register">S'inscrire</a>
                    </div>
                </div>


                <SearchBar />

                {user && (
                    <div className="dropdown ms-2">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            {user.username}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="/account">Mon compte</a></li>
                            <li><a className="dropdown-item" href="/logout">Se déconnecter</a></li>
                        </ul>
                    </div>
                )}

            </div>

        </nav>

    </>
  );
}

export default Header;
