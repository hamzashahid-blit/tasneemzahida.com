/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
	  colors: {
	    softgray: "#eeedf9",
	    primary: "#56457d",
	    softprimary: "#75659a",
	  },
	  fontSize: {
	  	hxl: '3.4rem',
		bxl: '1.35rem',
	  },
	},
    fontFamily: {
      "heading": ["linux-libertine-semibold", "sans"],
      "body": ["linux-libertine-regular", "sans"],
	  "fancy": ["scriptina", "serif"],
	  "barcelony": ["Barcelony", "serif"],
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
