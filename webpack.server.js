const path = require("path");
const nodeExternals = require("webpack-node-externals");
const WebpackPwaManifest = require("webpack-pwa-manifest");
module.exports = {
  entry: "./server/index.js",

  target: "node",

  externals: [nodeExternals()],

  output: {
    path: path.resolve("server-build"),
    filename: "index.js",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
    ],
  },

  plugins: [
    new WebpackPwaManifest({
      name: "My Progressive Web App",
      short_name: "MyPWA",
      description: "My awesome Progressive Web App!",
      background_color: "#ffffff",
      crossorigin: "use-credentials", //can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve("public/logo192.png"),
          sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
        },
        {
          src: path.resolve("public/logo512.png"),
          size: "1024x1024", // you can also use the specifications pattern
        },
        {
          src: path.resolve("src/assets/logo512.png"),
          size: "1024x1024",
          purpose: "maskable",
        },
      ],
    }),
  ],
};
