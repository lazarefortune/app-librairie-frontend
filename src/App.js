import "./App.css";
import Header from "./components/Header";
import HomePage from "./Pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route} from "react-router";
import ResultsPage from "./Pages/ResultsPage";
import AboutPage from "./Pages/AboutPage";
import BookPage from "./Pages/BookPage";

function App() {


    return (
        <>
            <div className="App">

                <Header />
                <Routes>
                    <Route exact={true} path="/" element={<HomePage/>}></Route>
                    <Route path="/results" element={<ResultsPage/>}></Route>
                    <Route path="/about" element={<AboutPage/>}></Route>
                    <Route path="/books/:id" element={<BookPage/>}></Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
