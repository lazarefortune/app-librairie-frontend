import {useLocation} from "react-router";
import {useEffect, useState} from "react";
import BookList from "../components/BookList";

const ResultsPage = () => {

    const [results, setResults] = useState([]);

    const location = useLocation();

    const data = location.state.data;

    const search = location.state.search;

    useEffect(() => {
        setResults(data)
    }
    , [data])

    return (
        <>
            <h4 className="text-center">Résultats de la recherche pour "<strong>{search}</strong>" </h4>

            <p>{results.length} résultats</p>

            <BookList books={results} />
        </>
    )
}

export default ResultsPage