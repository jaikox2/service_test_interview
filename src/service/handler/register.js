const { craeteUser } = require("../query/user");
const { hashPassword } = require("../authorization/hash");

async function register(username, password, name, surname) {
  try {
    var result = {
      success: true,
      data: null,
      error: null
    }

    // hash password
    const passwordHash = hashPassword(password);

    // insert
    await craeteUser(username, passwordHash, name, surname);

    return result;
  } catch (error) {
    result.success = false;
    result.error = error;
    return result;
  }
}

module.exports = register;
