const { injectBabelPlugin } = require('react-app-rewired');
const UglifyJsPlugin=require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
  module.exports = function override(config, env) {
    // console.log("这里值是=========1",config)
    if(process.env.NODE_ENV === "production"){
      config.optimization.minimizer.push( new UglifyJsPlugin({
        uglifyOptions: {
            // compress: false,
            compress: {
              warnings: false,
              drop_debugger: true,
              drop_console: true
            },
        }
    }))
    }
    // webpack4之前的
    // config.plugins.push(
    //   new webpack.optimize.UglifyJsPlugin({
    //       compress: {
    //         warnings: false,
    //         drop_debugger: true,
    //         drop_console: true
    //       }
    //   }))
   
//  console.log("这里值是=========2",config)
        config = injectBabelPlugin(
         ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
    config,
  );
  // console.log("这里值是=========2",config)
    return config;
  };