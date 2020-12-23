const { findUserByUsername } = require("../query/user");
const { comparePassword } = require("../authorization/hash");
const { genToken } = require('../authorization/token');

async function login(username, password) {
  try {
    var result = {
      success: true,
      data: null,
      error: null
    }

    // find by username
    const user = await findUserByUsername(username);

    if (user.length === 0) {
      result.success = false;
      result.error = new Error("invalid username and password");
      return result;
    }

    // campare password
    const compared = comparePassword(password, user[0].password);

    if (!compared) {
      result.success = false;
      result.error = new Error("invalid username and password");
      return result;
    }

    // get token
    const token = await genToken({ user_id: user[0].id });
    result.data = {
      access_token: token,
      type: 'Bearer',
    }
    return result;
  } catch (error) {
    result.success = false;
    result.error = error;
    return result;
  }
}

module.exports = login;
