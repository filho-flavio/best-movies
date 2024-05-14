import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "./MovieCard.css";

const imagesURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="movie-card">
      <img className="img-movie" src={imagesURL + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p className="movie-card-rate">
        <FaStar className="movie-card-img-rate" /> {movie.vote_average}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  );
};

export default MovieCard;
