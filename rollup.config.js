import { createPlugins } from "rollup-plugin-atomic"

const plugins = createPlugins([
  ["ts", { tsconfig: "./src/tsconfig.json", noEmitOnError: false, module: "ESNext" }],
  "js",
])

export default [
  {
    input: "src/terminal.ts",
    output: [
      {
        dir: "dist",
        format: "cjs",
        sourcemap: true,
      },
    ],
    // loaded externally
    external: ["atom", "electron", "node-pty-prebuilt-multiarch"],
    plugins: plugins,
  },
]
