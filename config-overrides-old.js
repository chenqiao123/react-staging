const { injectBabelPlugin } = require('react-app-rewired');
const UglifyJsPlugin=require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
  module.exports = function override(config, env) {
    // 生成环境去除打包
    // console.log("config",config)
    if(process.env.NODE_ENV === "production"){
        config.entry= {
     
            main: [...config.entry],
            vendors1: ["react","react-router","react-dom","antd","axios"],
        },
    // webpack4之前的
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
              warnings: false,
              drop_debugger: true,
              drop_console: true
            }
        }))
    }
    config.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({
        name: ["vendors1"],
        filename: 'static/js/[name].[hash].js',

    }))
   
// console.log("这里值是=========2",config)
        config = injectBabelPlugin(
         ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
    config,
  );
  // console.log("这里值是=========2",config)
    return config;
  };