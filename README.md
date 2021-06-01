# Conceptual Review

**Version** 1.0.5  
**Author** Peter Cole

## Overview

- Reviewing concepts from ES6 javascript
- Most `app.js` files have challenges and exercises covering the listed topic

## Table of Contents

- [Classes](./classes)
- [Callbacks](./callbacks)
- [Promises](./promises)
- [Async / Await](./async-await)
- [Spread / Rest](./spread)

## History and Resources

### ECMAScript

JavaScript is a programming language based on the ECMAScript specification. Languages such as ActionScript, JavaScript, JScript, and TypeScript all use ECMAScript as its core. As a comparison, AS/JS/JScript/TS are 4 different cars, but they all use the same engine… each of their exteriors is different though, and there have modifications done to each to make it unique.

Brendan Eich created Mocha which became LiveScript, and later JavaScript. Netscape presented JavaScript to Ecma International which develops standards, and it was renamed to ECMA-262 aka ECMAScript.

It’s important to note that Brendan Eich’s “JavaScript” is not the same JavaScript that is a dialect of ECMAScript. He built the core language which was renamed to ECMAScript, which differs from the JavaScript that browser-vendors implement nowadays.

[Source](https://medium.com/codingtown/ecmascript-2020-aka-es-11-9c547f69d96f) and [more from wikipedia](https://en.wikipedia.org/wiki/ECMAScript)

### ECMAScript Releases

- [ES6 Features](https://es6-features.org) _ES2015_

  - Classes
  - Import/Export modules
  - generators
  - templates
  - arrow functions
  - Promises
  - new numbers
  - Const/Let
  - typed array
  - array destructuring
  - Map/Set
  - Symbols
  - _and more!_

- [ES7](https://ecma-international.org/ecma-262/7.0/) _ES2016_

  - Exponentiation operator  
    `base ** exponent`
  - Array includes  
    `array.includes(myItem) // true or false`

- [ES8](https://jstobigdata.com/js/complete-list-of-es2017-features/) _ES2017_

  - Object.entries / Object.values (Array’s values / key equivalence for objects)
  - String padding `myString.padStart(2); // or padEnd`
  - Trailing comma `function test(a,b,c, ) // notice the comma after c`
  - Atomics and shared memory, [read](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics)
  - Async / Await

    ```javascript
    async function myAjaxGetCall(url) {
      return ajax.get(url);
    }
    const response = await MyAjaxGetCall('/getUsers');

    console.log(response); // response is available without using promise.then
    ```

- [ES9](https://www.tuannguyen.tech/2019/03/es9-new-features-reviews-and-examples/) _ES2018_

  - Lifting template literal restriction, [read](https://tc39.es/proposal-template-literal-revision/)
  - Asynchronous iterators, [read](https://tc39.es/proposal-async-iteration/)
  - Promise.finally, [read](https://github.com/tc39/proposal-promise-finally)
  - Object destructuring
  - Unicode escape, [read](https://github.com/tc39/proposal-regexp-unicode-property-escapes#ecmascript-proposal-unicode-property-escapes-in-regular-expressions)
  - Regex Upgrades
    - [RegExp Lookbehind Assertions](https://github.com/tc39/proposal-regexp-lookbehind)
    - [RegExp Named Capture Groups](https://github.com/tc39/proposal-regexp-named-groups)
    - [dotAll](https://github.com/tc39/proposal-regexp-dotall-flag)

- [ES10](https://jstutorial.medium.com/the-complete-guide-to-es10-features-f09a8c7be1bd) _ES2019_

  - `Array.flat`: `[[1, 2], 3]].flat() // [1, 2, 3]`
  - `Array.flatMap`: equivalent of `map().flat()`
  - `Object.fromEntries`: reverse operation from `Object.entries`, [read](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)
  - `String.trimStart()` & `String.trimEnd()`: Remove extra spaces in a string
  - Optional Catch binding: remove the need to add a param to the catch (Now you can do `} catch {` instead of `} catch(e) {`)
  - `Function.toString()` has been revisited to have a consistent behavior
  - [Symbol Description](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description)
  - BigInt — [arbitrary large numbers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
  - Improvement on Unicode support for `JSON.stringify()`
  - `Array.sort` now retains order if keys are equal

    ```javascript
    const array = [
      {key: 2, value: 'd'},
      {key: 1, value: 'a'},
      {key: 1, value: 'b'},
      {key: 1, value: 'c'},
    ];
    array.sort(...)
    /*
        [
          {key: 1, value: 'a'},
          {key: 1, value: 'b'},
          {key: 1, value: 'c'},
          {key: 2, value: 'd'},
        ];
    */
    ```

- [ES11](https://techaffinity.com/blog/what-is-new-for-developers-in-javascript-ecmascript/) _ES2020_

  - Optional Chaining
    - `state.user?.id` vs. `state.user.id`
    - with the question mark after `user`, if `user` is undefined, the app doesn't crash trying to render `id`, a property of `undefined`
    - which would look like:  
      `Uncaught TypeError: Cannot read property 'id' of undefined`
  - Nullish Coalescing
    ```javascript
    let theNumber = 7;
    let number = theNumber || 5;
    console.log(number); // output is: 7
    ```
    ```javascript
    let theNumber = 0;
    let number = theNumber ?? 5;
    console.log(number); // output is: 0
    ```
    ```javascript
    let theNumber = null;
    let number = theNumber ?? 5;
    console.log(number); // output is: 5
    ```
  - Private Fields
    To define a private property in JavaScript, it should have the hashtag symbol in the prefix

    ```javascript
    class Smartphones {
      #phone_color = 'silver';
      designer(name) {
        this.name = name;
      }

      get_color() {
        return this.#phone_color;
      }
    }
    const iPhone = new Smartphones('iPhone');
    console.log(iPhone.get_color()); // output is: silver
    console.log(iPhone.#phone_color); // output is: Private field '#phone_color' must be declared in an enclosing class
    ```

  - Static Fields
    To use a class method, a class had to be instantiated first, as shown below.

    ```javascript
    class Smartphone {
      add_color() {
        console.log('Adding Colors');
      }
    }
    const apple = new Smartphone();
    apple.add_color(); // output is: Adding Colors

    Smartphone.add_color(); // TypeError: Smartphone.add_color is not a function
    ```

    ```javascript
    class Smartphone {
      designer(color) {
        this.color = color;
      }
      static create_smartphone(color) {
        return new Smartphone(color);
      }
    }
    const silver = Smartphone.create_smartphone('silver'); // output is: undefined
    ```

  - Top Level Await
  - Promise.allSettled

    ```javascript
    promise_1 = Promise.resolve('hi');
    promise_2 = new Promise((resolve, reject) =>
      setTimeout(reject, 100, 'world')
    );

    Promise.allSettled([promise_1, promise_2]).then(
      ([promise_1_result, promise_2_result]) => {
        console.log(promise_1_result); // output is: {status: 'fulfilled', value: 'hi'}
        console.log(promise_2_result); // output is: {status: 'rejected', reason: 'world'}
      }
    );
    ```

  - Dynamic Import

    ```javascript
    // Alert.js file
    export default {
      show() {
        // Your alert
      },
    };

    // Some other file
    import('/components/Alert.js').then((Alert) => {
      Alert.show();
    });
    ```

    [More reading on a use case to boost app speed](https://techaffinity.com/blog/tips-for-website-optimization/)

  - MatchAll for regex
  - globalThis

    ```javascript
    // In a browser
    window == globalThis; // true

    // In node.js
    global == globalThis; // true
    ```

  - BigInt

    - 2^53 – 1 is the maximum number you can represent in JavaScript. But with JavaScript ES11 update, BigInt will support the creation of numbers that are bigger than that.

    ```javascript
    const maxNum = 9007199254740991n;

    // Case (i): When you add 1 to this number:
    const maxNum = 9007199254740991n;
    console.log(maxNum + 1n); // output is: 9007199254740992n

    // Case (ii): When you add 10 to this number:
    const maxNum = 9007199254740991n;
    console.log(maxNum + 10n); // output  is: 9007199254741001n
    console.log(maxNum + 10); // output is: Cannot mix BigInt and other types, use explicit conversions
    ```

- [Reading Source](https://medium.com/engineered-publicis-sapient/javascript-es6-es7-es10-where-are-we-8ac044dfd964)
