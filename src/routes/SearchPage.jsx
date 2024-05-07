import React, { useEffect, useState } from "react";
import { searchMovies } from "../utils/movies/movies.utils";
import SearchMovies from "./SearchMovies"; // Import your SearchMovies component
import { useLocation } from "react-router-dom";

const SearchPage = () => {
	const location = useLocation();
	const [searchTerm, setSearchTerm] = useState(""); // State for search term
	const [searchResults, setSearchResults] = useState([]); // State for search results

	// Fetch data based on searchTerm on component mount and on search term change
	useEffect(() => {
		const fetchMovies = async () => {
			const newSearchTerm = location.pathname.split("/search/")[1]; // Extract search term
			setSearchTerm(newSearchTerm); // Update state

			if (newSearchTerm) {
				const results = await searchMovies(newSearchTerm); // Replace with your movie fetching logic
				setSearchResults(results);
			}
		};

		fetchMovies();
	}, []); // Dependency array ensures re-fetch on location change

	// No need to access 'name.params' here (removed console.log)

	return (
		<div className="container">
			{/* Display search results here */}
			{searchResults.length > 0 ? (
				<SearchMovies
					name={searchTerm}
					results={searchResults}
				/> // Pass props to SearchMovies
			) : (
				<p>No results found for "{searchTerm}"</p> // Display message for empty results
			)}
		</div>
	);
};

export default SearchPage;
