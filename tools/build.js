/*eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import color from 'colors';

process.env.NODE_ENV = 'production';

console.log('Generating minified bundle for production via Webpack. This will take a moment.');

webpack(webpack.Config).run((err, stats) => {
  if(err) {
    console.log(err.bold.red);
    return 1;
  }

  const jsonStats = stats.toJson();

  if(jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error.red));
  }

  if(jsonStats.hasWarnings) {
    console.log('Webpack generated the following warnings: '.bold.yellow);
    jsonStats.warnings.map(warning => console.log(warning.yellow));
  }

  console.log('Webapck stats: ${stats}');

  // build success
  console.log('Your app has been compiled in production mode and written in /dist.');

  return 0;
});
