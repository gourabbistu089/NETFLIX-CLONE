/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('C:/Users/Hp User/Desktop/React Project/Netflix-Clone/src/components/netflixBag.jpg')",
      },
    },
  },
  plugins: [],
}

