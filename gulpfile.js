var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('build', buildTask);

function run(bin, args, done) {
  return new Promise(function(resolve, reject) {
    var exe = '"' + process.execPath + '"';
    var src = require.resolve(bin);
    var ps = exec([exe, src].concat(args || []).join(' '));

    ps.stdout.pipe(process.stdout);
    ps.stderr.pipe(process.stderr);
    ps.on('close', function(error) {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

function buildTask() {
  return run('rollup/bin/rollup', ['-c']);
}
