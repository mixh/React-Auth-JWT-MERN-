const { hash } = require("bcryptjs");
const User = require("../model/user.model");

async function add(data) {
  const hashedPassword = await hash(data.password, 4);

  try {
    const existingUser = get(data.email);
    if (existingUser) {
      throw new Error("User email already exists");
    }
  } catch (error) {
    console.log(error);
  }

  await User.create({
    email: data.email,
    password: hashedPassword,
  });
  return { msg: "User Created in DB", email: data.email };
}

async function get(email) {
  const user = await User.findOne({ email: email });
  if (!user) {
    throw new Error("User Couldnt be found");
  }
  return user;
}

module.exports = {
  add,
  get,
};
