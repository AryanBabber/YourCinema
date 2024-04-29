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
export let movieData = [];
export const getData = () => {
	return movieData;
};

export const setData = (data) => {
	movieData = data;
};

// check the genres file within this directory for genreID
export const getMoviesByGenre = async (genreId, maxLen = 20) => {
	let arr = [];
	// let pageNo = PAGE_NUMBER;
	while (arr.length < maxLen) {
		const res = await fetch(API_URI);
		const data = await res.json();

		arr.push(...data.results.filter((movie) => movie.genre_ids.includes(genreId)));
		PAGE_NUMBER++;
	}

	return arr;
};

// export const getMovie = (data) => {
// 	const dataFiltering = /tt\d{6,}/;
// 	return !dataFiltering.test(data)
// 		? getMovieByName(data)
// 		: getMovieByID(data);
// };

// const getMovieByName = (name) => {
// 	try {
// 		// inputData = name;
// 		API_URI += `t=${name}`;
// 	} catch (error) {
// 		console.log(`Movie not found. Error: ${error}`);
// 	}

// 	return API_URI;
// };

// const getMovieByID = (id) => {
// 	try {
// 		// inputData = id;
// 		API_URI += `i=${id}`;
// 	} catch (error) {
// 		console.log(`Movie not found. Error: ${error}`);
// 	}

// 	return API_URI;
// };

export const getGenre = (id) => {
	let gID = genres.filter((genre) => genre.genreId === id)[0];
	return gID.name;
};

