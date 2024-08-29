import { Configuration } from 'webpack';
import {WebpackPluginIstanbul} from "webpack-plugin-istanbul";

export default {
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: "webpack-plugin-istanbul/loader",
          options: {
            include: ["src/**/*.ts"],
            exclude: ["src/**/*.spec.ts"],
            extension: [".ts"],
            cwd: process.cwd(),
          },
        },
        enforce: 'post',
      },
    ],
  },
} as Configuration;


