const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const webpack = require("webpack");
const isProduction = process.env.WEBPACK_MODE === "production";
module.exports = {
	mode: isProduction ? "production" : "development",
	context: __dirname,
	entry: "./src/main.ts",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js",
		publicPath: "/",
	},
	devServer: {
		historyApiFallback: true,
	},
	stats: {
		errorDetails: true,
	},
	cache: {
		type: "filesystem",
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: "ts-loader",
				options: {
					appendTsSuffixTo: [/\.vue$/],
					configFile: path.resolve(__dirname, "tsconfig.json"),
				},
				exclude: /node_modules/,
			},
			{
				test: /\.vue$/,
				loader: "vue-loader",
				options: {
					postcss: [require("autoprefixer")()],
				},
				exclude: /node_modules/,
			},
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.(css|scss|sass)$/,
				use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
				exclude: /node_modules/,
			},
			{
				test: /\.(png|jpg|svg|gif)?$/,
				use: "file-loader",
			},
		],
	},
	resolve: {
		extensions: ["*", ".ts", ".js", ".vue", ".json"],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebPackPlugin({
			template: path.resolve(__dirname, "public/index.html"),
			filename: "index.html",
		}),
		new VueLoaderPlugin(),
		new webpack.DefinePlugin({
			__VUE_OPTIONS_API__: false,
			__VUE_PROD_DEVTOOLS__: false,
		}),
	],
	optimization: {
		minimize: true,
	},
};
