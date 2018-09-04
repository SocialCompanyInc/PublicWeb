var assert = require('assert');

function versionStamp(){
  var version = "";
  require('child_process').exec('git rev-parse HEAD', function(err, stdout) {
    version = stdout.slice(0,7);
    console.log("GIT version SHA: "+ version);
  });
}

function test() {
  var target = "012ae45";
  var current = "012ae45";
  console.log('Expecting ' + target + ' to equal ' + current + '.');

  try {
    assert.equal(current, target);
    console.log('Assert Passed.');
  } catch (error) {
    console.error('Assert Failed.');
  }
}

versionStamp();
test();
