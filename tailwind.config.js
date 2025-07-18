export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#4A6CFD",
        "primary-red": "#F44336",
        "dark-blue-bg": "#0D1D3A",
        "text-dark": "#1E293B", // A slightly softer black
        "text-light": "#CBD5E1", // A light grey for footer text
      },
    },
  },
  plugins: [],
};
