// webpack.config.js
module.exports = {
   output: {
      library: "clairex",
      libraryTarget: "umd",
      filename: "index.js"
   },
   devtool: "#inline-source-map",
   module: {
      loaders: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel",
            query: {
               compact: false
            }
         }
      ]
   }
};
