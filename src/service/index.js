const momentTimezone  = require('moment-timezone');

function timeNow() {
  return momentTimezone().tz('Asia/Bangkok').format();
}

module.exports = {
  timeNow,
}
