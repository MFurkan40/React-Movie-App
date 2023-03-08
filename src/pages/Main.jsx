import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import loadingImg from "../assets/icons/loading.svg";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  //! TMDB API KEYS
  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${currentPage}`;

  useEffect(() => {
    getMovies(FEATURED_API);
  }, [FEATURED_API]);

  const getMovies = (API) => {
    setLoading(true);
    axios
      .get(API)
      .then((res) => {
        setMovies(res.data.results);
        setTotalPages(res.data.total_pages);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <div className="h-screen">
      {!loading ? (
        <div className="flex justify-center flex-wrap">
          {movies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      ) : (
        <div className="h-screen flex justify-center">
          <img className="w-full" src={loadingImg} alt="loading-svg" />
        </div>
      )}
      <Pagination
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Main;
