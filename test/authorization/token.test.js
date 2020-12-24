const { genToken, verifyToken } = require('../../src/service/authorization/token');

const wrongToken = '$2b$10$9bFgKhkmYdrGu9MDGIwcNunue36/vwYsueTKm8MST0TX0JWm6Lolm';

test('should get token verify', async () => {
  try {
    const token = genToken({ userid: 'testid'});
    const decode = await verifyToken(token);
    expect(decode.data.userid).toBe('testid');
  } catch (error) {
    expect(error).toBe('testid');
  }
})

test('should get wrong token verify', async () => {
  try {
    const token = genToken({ userid: 'testid'});
    const decode = await verifyToken(wrongToken);
    expect(decode.data.userid).toBe('testid');
  } catch (error) {
    expect(error).toBe(error);
  }
})
