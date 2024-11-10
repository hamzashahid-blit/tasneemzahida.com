/** @type {import('tailwindcss').Config} old-softgray: eeedff9 */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
	  colors: {
	    softgray: "#e7e7e7",
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
}
