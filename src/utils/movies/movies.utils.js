// require("dotenv").config();
import { useState } from "react";
import { API_KEY } from "./movies.keys";
import { genres } from "./movies.genres";
export let PAGE_NUMBER = 1;
export let API_URI = `https://api.themoviedb.org/3/discover/movie?sort_by=trending.desc&api_key=${API_KEY}&page=${PAGE_NUMBER}`;
export let SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=`;
export const IMGPATH = "https://image.tmdb.org/t/p/w1280";
// export let API_URI = `https://www.omdbapi.com/?apikey=${API_KEY}&`;

// to get upcoming movies
export const UPCOMING_URI = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${API_KEY}`;
console.log(UPCOMING_URI);

// check the genres file within this directory for genreID
export const getMoviesByGenre = async (genreId, maxLen = 20) => {
	let arr = [];
	let seen = new Set();
	// let pageNo = PAGE_NUMBER;
	// while (arr.length <= maxLen) {
	// 	const res = await fetch(API_URI);
	// 	const data = await res.json();

	// 	// data.results.map((movie) => {
	// 	// 	if (movie.genre_ids.includes(genreId) && !seen.has(movie.id)) {
	// 	// 		arr.push(movie);
	// 	// 		console.log(arr)
	// 	// 		seen.add(movie.id);
	// 	// 	}
	// 	// });

	// 	for (const movie of data.results) {
	// 		if (movie.genre_ids.includes(genreId) && !seen.has(movie.id)) {
	// 			arr.push(movie);
	// 			seen.add(movie.id); // Add movie ID to the Set
	// 		}
	// 	}

	// 	PAGE_NUMBER++;
	// }
	let iterAPI = API_URI.split("&page")[0];
	for (let page = 1; arr.length < maxLen; page++) {
		const response = await fetch(`${iterAPI}&page=${page}`);
		const data = await response.json();

		for (const movie of data.results) {
			if (movie.genre_ids.includes(genreId) && !seen.has(movie.id)) {
				arr.push(movie);
				seen.add(movie.id);
			}
		}
	}

	console.log(arr);
	return arr;
};

export const getGenre = (id) => {
	let gID = genres.filter((genre) => genre.genreId === id)[0];
	return gID.name;
};

export const releaseDateFormat = (releaseDate) => {
	let releaseMonth = +releaseDate.split("-")[1];
	let month = "";
	switch (releaseMonth) {
		case 1:
			month = "Jan";
			break;
		case 2:
			month = "Feb";
			break;
		case 3:
			month = "Mar";
			break;
		case 4:
			month = "Apr";
			break;
		case 5:
			month = "May";
			break;
		case 6:
			month = "Jun";
			break;
		case 7:
			month = "Jul";
			break;
		case 8:
			month = "Aug";
			break;
		case 9:
			month = "Sep";
			break;
		case 10:
			month = "Oct";
			break;
		case 11:
			month = "Nov";
			break;
		case 12:
			month = "Dec";
			break;
	}

	let day = releaseDate.split("-")[2];
	let year = releaseDate.split("-")[0];

	return `${month} ${day}, ${year}`;
};
