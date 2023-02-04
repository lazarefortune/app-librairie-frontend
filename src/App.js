import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import {Routes, Route} from "react-router";
import ResultsPage from "./pages/ResultsPage";
import AboutPage from "./pages/AboutPage";
import BookPage from "./pages/BookPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {


    return (
        <>
            <div className="App">

                <Header />
                <div className="container pt-4">
                    <Routes>
                        <Route exact={true} path="/" element={<HomePage/>}></Route>
                        <Route path="/login" element={<LoginPage/>}></Route>
                        <Route path="/register" element={<RegisterPage/>}></Route>
                        <Route path="/results" element={<ResultsPage/>}></Route>
                        <Route path="/about" element={<AboutPage/>}></Route>
                        <Route path="/books/:id" element={<BookPage/>}></Route>
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default App;
