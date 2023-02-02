import React, { useState } from "react";
import {useNavigate} from "react-router";
function Header() {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:4000/api/books/search", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: search }),
    })
        .then((response) => response.json())
        .then((data) => {
                navigate("/results", {state: {data: data}});
        }
        );
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Librairie</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="/">Accueil</a>
                        <a className="nav-link" href="/AboutPage.js">A propos</a>
                    </div>
                </div>

                <form className="d-flex" onSubmit={handleSubmit}>
                    <input className="form-control me-2" type="search" placeholder="Rechercher un livre..." value={search} aria-label="Search" onChange={handleChange} />
                    <button className="btn btn-outline-success" type="submit">Rechercher</button>
                </form>

            </div>

        </nav>

    </>
  );
}

export default Header;
