const preprocess = require('svelte-preprocess');
const dotenv = require('dotenv');
const result = dotenv.config({
    path: "test.env",
});

if (result.error) throw result.error;
console.log(result.parsed)


/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};
