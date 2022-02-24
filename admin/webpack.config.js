module.exports = {
  //...
  resolve: {
    // configuration options
    fallback: {
      "stream": require.resolve("stream-browserify"),
    },
  },
};
