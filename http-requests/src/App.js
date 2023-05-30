import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";

function App() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [retryTimer, setRetryTimer] = useState(null);

	const fetchMoviesHandlerAsync = useCallback(async () => {
		setIsLoading(true);
		setError(null);

		try {
			const res = await fetch("https://react-http-5ac72-default-rtdb.firebaseio.com/movies.json");

			if (res.ok) {
				const data = await res.json();

				const loadedMovies = [];
				for (const key in data) {
					loadedMovies.push({
						id : key,
						title : data[key].title,
						openingText : data[key].openingText,
						releaseDate : data[key].releaseDate
					})
				}
				setMovies(loadedMovies);
				clearTimeout(retryTimer);
			} else {
				throw new Error(`Something went wrong!....Retrying`);
			}
		} catch (error) {
			setError(error.message);
			retryFetch();
		}
		setIsLoading(false);
	}, []);

	useEffect(() => {
		fetchMoviesHandlerAsync();
	}, [fetchMoviesHandlerAsync]);

	const retryFetch = () => {
		const timer = setTimeout(() => {
			fetchMoviesHandlerAsync();
		}, 5000);
		setRetryTimer(timer);
	};

	async function addMoveHandler(movie) {
		const response = await fetch("https://react-http-5ac72-default-rtdb.firebaseio.com/movies.json", {
			method : "POST",
			body : JSON.stringify(movie),
			headers : {
				'Content-Type': 'application/json'
			}
		})

		const data = await response.json();
	}

	const cancelFetchHandler = () => {
		clearTimeout(retryTimer);
		setError(null);
	};

	useEffect(() => {
		return () => {
			clearTimeout(retryTimer);
		};
	}, [retryTimer]);


	return (
		<React.Fragment>
			<section>
				<AddMovie onAddMovie={addMoveHandler}/>
			</section>
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
