import axios from "axios";
import { useEffect, useState } from "react";
import SearchMovieCard from "../components/SearchMovieCard";
import Pagination from "../components/Pagination";
import loadingImg from "../assets/icons/loading.svg";
import NotFoundImg from "../assets/icons/NotFound.svg";
import { useLocation } from "react-router-dom";

const SearchDetail = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const { state } = useLocation();

  const searchTerm = state.searchTerm;

  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&page=${currentPage}&query=${searchTerm}`;

  useEffect(() => {
    getMovies(SEARCH_API);
  }, [SEARCH_API]);

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

  if (!movies.length) {
    return (
      <div className="h-screen">
        <div className="h-screen flex justify-center">
          <img src={NotFoundImg} alt="loading-svg" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="h-screen">
        {!loading ? (
          <div className="flex justify-center flex-wrap">
            {movies.map((movie) => (
              <SearchMovieCard
                key={movie.id}
                {...movie}
                searchTerm={searchTerm}
              />
            ))}
          </div>
        ) : (
          <div className="h-screen flex justify-center">
            <img className="w-full" src={loadingImg} alt="loading-svg" />
          </div>
        )}
        <Pagination totalPages={totalPages} setCurrentPage={setCurrentPage} />
      </div>
    );
  }
};

export default SearchDetail;
