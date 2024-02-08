import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/index.esm.js",
      format: "es",
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    postcss({
      extensions: [".css"],
    }),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: false,
      clean: true,
    }),
    commonjs(),
    terser(),
  ],
};
