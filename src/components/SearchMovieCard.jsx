import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContextProvider";

const SearchMovieCard = ({
  poster_path,
  title,
  overview,
  vote_average,
  searchTerm,
  id,
}) => {
  const { currentUser } = useAuthContext();
  const navigate = useNavigate();

  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  const defaultImage =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

  const getVoteClass = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };

  //! RENDERİNG

  return (
    <div
      className="movie dark:shadow-dark shadow-white"
      onClick={() => navigate(`/details/${searchTerm}/` + id)}
      // !currentUser && alert("please log in")
      // unnecessary as the search bar can only be used by the user.
    >
      <img
        loading="lazy"
        src={poster_path ? IMG_API + poster_path : defaultImage}
        alt="movie-card"
      />
      <div className="desciption-movie flex justify-between text-md items-center p-5 text-white">
        <h5>{title}</h5>
      </div>
      {currentUser && (
        <div className={`imbd tag m-1 ${getVoteClass(vote_average)}`}>
          {vote_average?.toFixed(1)}
        </div>
      )}
      <div className="movie-over">
        <h2>Overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default SearchMovieCard;
