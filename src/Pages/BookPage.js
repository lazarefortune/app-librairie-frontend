import {useParams} from "react-router";
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


const BookPage = () => {
    const [book, setBook] = useState([]);

    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("http://localhost:4000/api/books/" + id);
                setBook(result.data[0])
                console.log(result.data[0])
        };
        fetchData();
    }, []);


    const handleAvailable = async () => {
        console.log("handleAvailable")
        const result = await axios.patch("http://localhost:4000/api/books/available/" + id + "/0")
        console.log(result.data)
        setBook(result.data)
    }

    const handleUnavailable = async () => {
        console.log("unavailable")
        const result = await axios.patch("http://localhost:4000/api/books/available/" + id + "/1")
        console.log(result.data)
        setBook(result.data)
    }

    return (
        <>
            <h4 className="text-center">Détails du livre</h4>
            <div className="container">
                <div className="row">
                    <div className="col-7 mx-auto">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{book.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
                                <p className="card-text">{book.description}</p>
                                <p className="card-text">
                                    {book.available ? <span className="badge bg-success">Disponible</span> : <span className="badge bg-warning">Indisponible</span>}
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <Link to={"/"} className="btn btn-sm btn-outline-secondary">Retour</Link>
                                        {book.available ?
                                            <button type="button" className="btn btn-sm btn-outline-success" onClick={handleAvailable}>Emprunter</button>
                                            :
                                            <button type="button" className="btn btn-sm btn-outline-warning" onClick={handleUnavailable}>Rendre</button>
                                        }
                                    </div>
                                    <small className="text-muted">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default BookPage