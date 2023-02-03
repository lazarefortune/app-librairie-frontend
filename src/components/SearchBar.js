import {useNavigate} from "react-router";
import {useState} from "react";

const SearchBar = ({ onSearch }) => {
    const [search, setSearch] = useState("");

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();

        if (search === "") {
            alert("Veuillez entrer un titre de livre")
            return;
        }

        fetch("http://localhost:4000/api/books/search", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title: search }),
        })
            .then((response) => response.json())
            .then((data) => {
                    navigate("/results", {
                        state: {
                            data: data,
                            search: search
                        }
                    });
                }
            );
    };

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    return (
        <form className="d-flex" onSubmit={handleSubmit}>
            <input className="form-control me-2" type="search" placeholder="Rechercher un livre..." value={search} aria-label="Search" onChange={handleChange} />
            <button className="btn btn-outline-success" type="submit">Rechercher</button>
        </form>
    );
}

export default SearchBar;