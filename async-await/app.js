'use strict';

const superagent = require('superagent');

/*
Write function called getRandomNumber that returns a promise
In the promise, write a setTimeout() that will resolve the promise with a random number after .5 seconds
Write an async function that invokes the getRandomNumber function, awaiting the random number, and printing that to the console.
Invoke your async function
*/

const getRandomNumber = new Promise((resolve) => {
	setTimeout(() => {
		resolve(Math.ceil(Math.random() * 5));
	}, 500);
});

const printRandomNumber = async () => {
	const result = await getRandomNumber;
	console.log(result);
};

printRandomNumber();

/*
Write an asynchronous function that accepts 1 parameter
- A city name
When invoked, this function should use superagent to retrieve the city data from the geocode.xyz API, which uses a URL formatted as follows.
https://geocode.xyz/seattle?json=1
Once retrieved, print to the console, the latitude and longitude
Invoke your async function with a few cities as a test
*/

const getCityData = (cityName) => {
	cityName = cityName.toLowerCase();
	return superagent
		.get(`https://geocode.xyz/${cityName}?json=1`)
		.then((res) => {
			let cityData = {
				name: res.body.standard.city,
				latitude: res.body.latt,
				longitude: res.body.longt
			};
			return cityData;
		})
		.catch((err) => {
			console.error("ERROR: It's quiet.. TOO quiet..");
		});
};

const printLatAndLong = async (cityData) => {
	const result = await getCityData(cityData);
	console.log(result);
};

printLatAndLong('PORTland');
printLatAndLong('SEaTTlE');
printLatAndLong('SAn fRaNcIsCO');
