const { findUserByUsername, insertUserActive, findUserActive, deleteUserActived } = require("../query/user");
const { comparePassword } = require("../authorization/hash");
const { genToken, verifyTokenHandler } = require('../authorization/token');

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

    // user active checker
    const userActive = await findUserActive(user[0].id);
    if (userActive.length !== 0) {
      // verify token
      const verified = await verifyTokenHandler(userActive[0].token);
      if (verified) {
        result.success = false;
        result.error = new Error("another device actived");
        return result;
      }
      // delete active user
      await deleteUserActived(userActive[0].id);
    }

    // get token
    const token = await genToken({ user_id: user[0].id });
    result.data = {
      access_token: token,
      type: 'Bearer',
    }

    // user active this account
    await insertUserActive(user[0].id, token);

    return result;
  } catch (error) {
    result.success = false;
    result.error = error;
    return result;
  }
}

module.exports = login;
