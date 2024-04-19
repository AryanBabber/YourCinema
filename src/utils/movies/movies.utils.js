// require("dotenv").config();
import { useState } from "react";
import { API_KEY } from "./movies.keys";
import { genres } from "./movies.genres";
export let API_URI = `https://api.themoviedb.org/3/discover/movie?sort_by=trending.desc&api_key=${API_KEY}&page=1`;
export let SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=`;
export const IMGPATH = "https://image.tmdb.org/t/p/w1280";
// export let API_URI = `https://www.omdbapi.com/?apikey=${API_KEY}&`;

// to get upcoming movies
export const UPCOMING_URI = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${API_KEY}`;
console.log(UPCOMING_URI);

export const getMovie = (data) => {
	const dataFiltering = /tt\d{6,}/;
	return !dataFiltering.test(data)
		? getMovieByName(data)
		: getMovieByID(data);
};

const getMovieByName = (name) => {
	try {
		// inputData = name;
		API_URI += `t=${name}`;
	} catch (error) {
		console.log(`Movie not found. Error: ${error}`);
	}

	return API_URI;
};

const getMovieByID = (id) => {
	try {
		// inputData = id;
		API_URI += `i=${id}`;
	} catch (error) {
		console.log(`Movie not found. Error: ${error}`);
	}

	return API_URI;
};

export const getGenre = (id) => {
	let gID = genres.filter((genre) => genre.id === id)[0];
	return gID.name
};

