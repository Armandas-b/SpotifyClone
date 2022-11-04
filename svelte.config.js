import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	}
};

// svelte.config.js
export default {
	kit: {
	  adapter: adapter({
		edge: false,
		split: true
	  })
	}
  };