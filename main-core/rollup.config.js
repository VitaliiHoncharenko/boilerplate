import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';

export default {
  input: 'main-core/src/index.js',
  output: {
    file: 'main-core/lib/core.js',
    format: 'cjs',
  },
  external: [
    'react',
  ],
  plugins: [
    resolve(),
    babel({
      exclude: ['../node_modules/**', '**/*.scss'],
    }),
    postcss({
      modules: true,
      minimize: true,
      plugins: [
        autoprefixer({
          browsers: ['"last 2 versions", "not ie 11", "safari >= 10", "last 3 Edge versions", "not op_mini all", "not dead"'],
          flexbox: 'no-2009',
        }),
      ],
    }),
    commonjs(),
  ],
};
