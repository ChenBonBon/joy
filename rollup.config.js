import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";

const babelOptions = {
  presets: ["@babel/preset-env"],
  extensions: [".js", ".jsx", ".ts", ".tsx"],
  exclude: "**/node_modules/**",
};

export default [
  {
    input: "packages/index.ts",
    output: [{ filename: "joy.es.js", dir: "dist/", format: "esm" }],
    plugins: [
      peerDepsExternal(),
      postcss(),
      resolve(),
      commonjs(),
      typescript(),
      babel(babelOptions),
    ],
  },
  {
    input: "packages/index.ts",
    output: [{ filename: "joy.d.ts", dir: "dist/", format: "esm" }],
    plugins: [
      peerDepsExternal(),
      postcss(),
      resolve(),
      commonjs(),
      typescript(),
      babel(babelOptions),
      dts(),
    ],
  },
];
