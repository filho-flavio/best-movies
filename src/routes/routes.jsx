import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home";
import Movie from "../pages/Movie/Movie";
import Search from "../pages/Search/Search";
import App from "../App";

const RoutesMovie = () => {

    return (
        <Router>
            <Routes>
                <Route element={<App />}>
                    <Route path="/" element={<Home />} />
                    <Route path="movie/:id" element={<Movie />} />
                    <Route path="search" element={<Search />} />
                </Route>
            </Routes>
        </Router>
    )

}

export default RoutesMovie;