module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false,
	theme: {
		extend: {
			colors: {
				customPink: "#E270A4",
				customYellow: "#ffdd4a",
				customBlue: "#345995",
				customGray: "#C1BDBE",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/line-clamp")],
};
