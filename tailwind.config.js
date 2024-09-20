/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
        backgroundImage: {
          'custom-image': "url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg')",
          'custom-image2':"url('https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
      },
        fontFamily:{
          "sora": ["Sora", "sans-serif"]
        }
    },
  },
  plugins: [],
}

