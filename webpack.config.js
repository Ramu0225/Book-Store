const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const webpack = require("webpack");
module.exports = {
	context: __dirname,
	entry: "./src/main.ts",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "main.js",
		publicPath: "/",
	},
	devServer: {
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: "ts-loader",
				options: {
					appendTsSuffixTo: [/\.vue$/],
				},
			},
			{
				test: /\.vue$/,
				loader: "vue-loader",
			},
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.s(c|a)ss$/,
				use: ["vue-style-loader", "css-loader"],
			},
			{
				test: /.css$/,
				use: ["vue-style-loader", "css-loader"],
			},
			{
				test: /\.(png|jpg|svg|gif)?$/,
				use: "file-loader",
			},
		],
	},
	resolve: {
		extensions: ["*", ".ts", ".js", ".jsx", ".vue", ".json"],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebPackPlugin({
			template: path.resolve(__dirname, "public/index.html"),
			filename: "index.html",
		}),
		new VueLoaderPlugin(),
	],
};
