require("esbuild")
  .build({
    entryPoints: ["./src/index.js"],
    bundle: true,
    platform: "node",
    minify: true,
    outfile: "./dist/out.js",
  })
  .catch(() => process.exit(1));
