module.exports = {
  entry: "./src/index.js",
  output: {
    library: "clairex",
    libraryTarget: "umd",
    filename: "lib/clairex.js"
  },
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
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel",
      query: {
        compact: false // because I want readable output
      }
    }
  ]
}
};
