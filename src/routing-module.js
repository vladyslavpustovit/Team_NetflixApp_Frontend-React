import {useAuthContext} from "./hooks/useAuthContext";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

//Public routes
import Landing from "./components/App/land-page/land-page";
import Login from "./components/App/login/login";
import Register from "./components/App/register/register";

//Protected routes
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./components/App/home/home";
import Categories from "./components/App/categories/categories";
import TopMovies from "./components/App/top-movies/top-movies";
import About from "./components/App/about/about";
import MovieDetails from "./components/App/movie-details/movie-details";
import SearchResults from "./components/App/search-results/search-results";


export default function AppRouter() {
    const { user } = useAuthContext();

    return (
        <>
            <BrowserRouter>
                 {user && <Header />}
                <Routes>
                    <Route
                        path='/landing'
                        element={!user ? <Landing/> : <Navigate to='/'/>}
                    />
                    <Route
                        path='/login'
                        element={!user ? <Login/> : <Navigate to='/'/>}
                    />
                    <Route
                        path='/register'
                        element={!user ? <Register/> : <Navigate to='/'/>}
                    />
                    <Route
                        path='/'
                        element={user ? <Home/> : <Navigate to='/landing'/>}
                    />
                    <Route
                        path='/categories'
                        element={user ? <Categories/> : <Navigate to='/login'/>}
                    />
                    <Route
                        path='/top'
                        element={user ? <TopMovies/> : <Navigate to='/login'/>}
                    />
                    <Route
                        path='/about'
                        element={ <About/> }
                    />
                    <Route
                        path="/movie/:movieId"
                        element={user ? <MovieDetails/> : <Navigate to='/login'/>}
                    />
                    <Route
                        path="/search-results"
                        element={user ? <SearchResults/> : <Navigate to='/login'/>}
                    />
                </Routes>
                 {user && <Footer />}
            </BrowserRouter>
        </>
    )
}