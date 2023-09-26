/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./dist/**/*.{html,js}"],
 theme: {
  extend: {
   colors: {
    customColor1: "#507DBC", //drak blue  //alternate color ( Sea Green ) = #35A29F
    customColor2: "rgb(32,31,31)", //darkgray
    customColor3: "#252525", //lightgray
    customColor4: "#BBD1EA", //superlightblue
   },
  },
 },
 plugins: [],
};
