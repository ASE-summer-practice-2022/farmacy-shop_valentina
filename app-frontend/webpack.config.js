const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "prodaction",
  context: path.resolve(__dirname, "src"),
  entry: "./index.tsx",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "resolve-url-loader",
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(jpe?g|gif|webp|png|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "./images/[name].[ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: "asset/resource",
        generator: {
          filename: "./fonts/[name].[ext]",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "app.css",
    }),
  ],
};
