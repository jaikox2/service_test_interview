const { hashPassword, comparePassword } = require('../../src/service/authorization/hash');

const planPassword = 'test123';
const hashTextPassword = '$2b$10$9bFgKhkmYdrGu9MDGIwcNunue36/vwYsueTKm8MST0TX0JWm6Lolm';

test('should get hash text', () => {
  expect(hashPassword(planPassword)).not.toBe(planPassword);
})

test('should get true from compare', () => {
  expect(comparePassword(planPassword, hashTextPassword)).toBe(true);
})

const wrongHashTextPassword = '$2b$10$9bFgKhkmYdrGu9MDGIwcNunue36/vwYsueTKm8MST0kjkljlk';

test('should get false from compare', () => {
  expect(comparePassword(planPassword, wrongHashTextPassword)).toBe(false);
})
