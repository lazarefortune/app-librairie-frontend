import React, { useState } from "react";

function Header() {
  const [search, setSearch] = useState("");
  const handleSubmit = (event) => {
    console.log(handleSubmit);
    event.preventDefault();
    fetch(`http://localhost:4000/api/books/search`)
      .then((response) => response.json())
      .then((data) => {
        // traiter les données de la réponse
      })
      .catch((error) => {
        // gérer les erreurs
      });
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <header className="py-3 mb-3 border-bottom">
        <div className="container-fluid d-grid gap-3 align-items-center">
          <div className="d-flex align-items-center">
            <form className="w-50 me-3" onSubmit={handleSubmit}>
              <input
                type="text"
                class="form-control"
                placeholder="Search..."
                aria-label="Search"
                value={search}
                onChange={handleChange}
              />
            </form>
            <button type="submit" className="btn btn-primary">
              search
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
