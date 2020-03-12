const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: "./src/js/index.js",
    module:{
        rules: [
            {
              test: /\.html$/,
              use: [
                  {

                      loader: "html-loader",
                      options: { minimize: true }
                  }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                  ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                    loader: 'file-loader',
                    options: {
                      esModule: false,
                    },
                  }
                ]
            }





          ]
    },

    devServer: {
        // Display only errors to reduce the amount of output.
        stats: "errors-only",
    
        // Parse host and port from env to allow customization.
        //
        // If you use Docker, Vagrant or Cloud9, set
        // host: "0.0.0.0";
        //
        // 0.0.0.0 is available to all network devices
        // unlike default `localhost`.
        //host: process.env.HOST, // Defaults to `localhost`
        //port: process.env.PORT, // Defaults to 8080
        open: true, // Open the page in browser
        watchOptions: {
            // Delay the rebuild after the first change
            aggregateTimeout: 300,
      
            // Poll using interval (in ms, accepts boolean too)
            poll: 1000,
          },
      },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}