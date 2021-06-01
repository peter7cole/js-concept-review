const superagent = require('superagent');

/* 
Write a function called isEven that receives 1 parameter:
A Number
And returns a Promise
Determine if the number is even. If so, resolve the promise with a value of true, otherwise, reject it with a value of false
------
Create an array of numbers.
Iterate the array with a for loop, each time calling the isEven function with the number and a callback
The callback should console.log() the return value from isEven()
*/

const numberArray = [0, 1, 2, 3, 4, 5];

const isEven = (number) => {
  return new Promise((resolve, reject) => {
    let pauseTime = Math.ceil(Math.random() * 1000);
    setTimeout(() => {
      if (number % 2 === 0) {
        resolve(true);
      } else {
        reject(false);
      }
    }, pauseTime);
  });
};

const printCallback = (i, res) => {
  console.log(`${i} is even: ${res}`);
};

const loopOverArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    isEven(i)
      .then((res) => printCallback(i, res))
      .catch((err) => printCallback(i, err));
  }
};

loopOverArray(numberArray);

/* 
Write a function called getCharacters
When invoked, make a superagent call to the Star Wars API
With the returned data, change the results into an object where the key is the character's name and the value is the URL to their page
Output this JSON object
*/

// Star Wars API is no longer maintained, so used the Poke API instead

const getPokemon = (pokeName) => {
  return superagent
    .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}/`)
    .then((res) => {
      let pokemon = {};
      pokemon[res.body.name] = res.body.sprites.front_default;
      return pokemon;
    })
    .catch((err) => {
      console.error("ERROR: It's quiet.. TOO quiet..");
    });
};

const printPokemon = async (pokeName) => {
  const result = await getPokemon(pokeName);
  console.log(result);
};

printPokemon('geodude');
