import React, { useState , useEffect} from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
  const [retryTimer, setRetryTimer] = useState(null);

	// function fetchMoviesHandler() {
	// 	fetch("https://swapi.dev/api/films")
	// 		.then((res) => {
	// 			return res.json();
	// 		})
	// 		.then((data) => {
	// 			const transformedMovies = data.results.map((movieData) => {
	// 				return {
	// 					id: movieData.episode_id,
	// 					title: movieData.title,
	// 					openingText: movieData.opening_crawl,
	// 					releaseDate: movieData.release_date,
	// 				};
	// 			});
	// 			setMovies(transformedMovies);
	// 		});
	// }

	async function fetchMoviesHandlerAsync() {
		setIsLoading(true);
		setError(null);

		try {
			const res = await fetch("https://swapi.dev/api/films");

			if (res.ok) {
				const data = await res.json();
				const transformedMovies = data.results.map((movieData) => {
					return {
						id: movieData.episode_id,
						title: movieData.title,
						openingText: movieData.opening_crawl,
						releaseDate: movieData.release_date,
					};
				});
        setMovies(transformedMovies);
        clearTimeout(retryTimer);
			}
			else {
				throw new Error(`Something went wrong!....Retrying`);
			}
		} catch (error) {
      setError(error.message);
      retryFetch();
		}
		setIsLoading(false);
	}

  const retryFetch = () => {
    const timer = setTimeout(() => {
      fetchMoviesHandlerAsync();
    }, 5000)
    setRetryTimer(timer);
  }

  const cancelFetchHandler = () => {
    clearTimeout(retryTimer);
    setError(null);
  }

  useEffect(() => {
    return () => {
      clearTimeout(retryTimer)
    }
  }, [retryTimer]);
	return (
		<React.Fragment>
			<section>
				<button onClick={fetchMoviesHandlerAsync}>Fetch Movies</button>
				<button onClick={cancelFetchHandler}>Cancel</button>
			</section>
			<section>
				{!isLoading && <MoviesList movies={movies} />}
				{isLoading && <p>Loading ...</p>}
				{!isLoading && error && <p>{error}</p>}
			</section>
		</React.Fragment>
	);
}

export default App;
