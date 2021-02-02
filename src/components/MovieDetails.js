import React from "react";
import { MoviesContext } from "../contexts/MoviesContext";

export default function MovieDetails(props) {
  const { favouriteMovies } = React.useContext(MoviesContext);
  const [favouriteMovie, setFavouriteMovie] = React.useState({});

  React.useEffect(() => {
    const movieToFindId = Number(props.match.params.id);
    const favouriteMovieToDisplay = favouriteMovies.find(
      (movie) => movie.id === movieToFindId
    );
    setFavouriteMovie(favouriteMovieToDisplay);
  }, []);

  return (
    <div>
      <p>Movie Details</p>
      {favouriteMovie ? (
        <div>
          <p>{favouriteMovie.title}</p>
          <p>{favouriteMovie.id}</p>
        </div>
      ) : (
        <p>The favourite movie selected does not exist</p>
      )}
    </div>
  );
}
