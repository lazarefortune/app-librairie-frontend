import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./components/Header";
import HomePage from "./Pages/HomePage";
import {Routes, Route} from "react-router";
import ResultsPage from "./Pages/ResultsPage";
import AboutPage from "./Pages/AboutPage";
import BookPage from "./Pages/BookPage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";

function App() {


    return (
        <>
            <div className="App">

                <Header />
                <Routes>
                    <Route exact={true} path="/" element={<HomePage/>}></Route>
                    <Route path="/login" element={<LoginPage/>}></Route>
                    <Route path="/register" element={<RegisterPage/>}></Route>
                    <Route path="/results" element={<ResultsPage/>}></Route>
                    <Route path="/about" element={<AboutPage/>}></Route>
                    <Route path="/books/:id" element={<BookPage/>}></Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
