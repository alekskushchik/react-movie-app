import { Home } from "./pages/Home";
import { PopularMovies } from "./pages/PopularMovies";
import { NowPlayingMovies } from "./pages/NowPlayingMovies";
import { TopRatedMovies } from "./pages/TopRatedMovies";
import { UpcomingMovies } from "./pages/UpcomingMovies";
import { SingleMovie } from "./pages/SingleMovie";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/popular",
        element: <PopularMovies />,
    },
    {
        path: "now_playing",
        element: <NowPlayingMovies />,
    },
    {
        path: "top_rated",
        element: <TopRatedMovies />,
    },
    {
        path: "upcoming",
        element: <UpcomingMovies />,
    },
    {
        path: "/movie/:movieId",
        element: <SingleMovie />,
    },
]);

function App() {
    return (
        <main className="container">
            <RouterProvider router={router} />
        </main>
    );
}

export default App;
