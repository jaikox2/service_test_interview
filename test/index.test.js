const momentTimezone  = require('moment-timezone');
const { timeNow } = require('../src/service/index');

const now = momentTimezone().tz('Asia/Bangkok').format();

test('should get now date/time', () => {
  expect(timeNow()).toBe(now);
})
