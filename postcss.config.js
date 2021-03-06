const tailwindcss = require('tailwindcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss')

const plugins = [
  tailwindcss(), 
  autoprefixer(), 
  purgecss({ content: ['**/*.njk'], css: ['**/bootstrap.scss']}),
  cssnano()
];

module.exports = {
  plugins
};