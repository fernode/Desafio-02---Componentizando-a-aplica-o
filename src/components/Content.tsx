import { MovieCard } from "./MovieCard"
import {MovieProps} from "../App"

interface ContentProps {
  selectedGenre: {
    id: Number,
    name: String,
    title: String
  };
  movies:  MovieProps[];
}

function Content({selectedGenre, movies}: ContentProps) {
  console.log({selectedGenre, movies})
  // Complete aqui
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default Content