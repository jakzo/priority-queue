import buble from 'rollup-plugin-buble';

export default {
  entry: "src/main.js",
  format: "umd",
  dest: "lib/priority-queue.js",
  sourceMap: true,
  sourceMapFile: 'lib/codeshift.js.map',
  moduleName: "PriorityQueue",
  plugins: [ buble() ]
};
