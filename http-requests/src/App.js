import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
	const [movies, setMovies] = useState([]);

	function fetchMoviesHandler() {
		fetch("https://swapi.dev/api/films")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				const transformedMovies = data.results.map((movieData) => {
					return {
						id: movieData.episode_id,
						title: movieData.title,
						openingText: movieData.opening_crawl,
						releaseDate: movieData.release_date,
					};
				});
				setMovies(transformedMovies);
			});
	}

	async function fetchMoviesHandlerAsync() {
		const res = await fetch("https://swapi.dev/api/films");
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
	}

	return (
		<React.Fragment>
			<section>
				<button onClick={fetchMoviesHandlerAsync}>Fetch Movies</button>
			</section>
			<section>
				<MoviesList movies={movies} />
			</section>
		</React.Fragment>
	);
}

export default App;
