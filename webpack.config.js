// webpack.config.js
module.exports = {
   output: {
      library: "clairex",
      libraryTarget: "umd",
      filename: "clairex.js"
   },
   devtool: "#inline-source-map",
   externals: [
      {
         lodash: {
            root: "_",
            commonjs: "lodash",
            commonjs2: "lodash",
            amd: "lodash"
         }
      }
   ],
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
