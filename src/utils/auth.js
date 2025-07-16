const jwt = require("jsonwebtoken");

const getUserByToken = (token) => {
  try {
    if (!token) {
      return null;
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.id;
  } catch (error) {
    console.error("Error while fetching user", error);
    return null;
  }
};

const auth = (userId) => {
  if (!userId) {
    throw new Error("Un Authorized");
  }
};

module.exports = {
  getUserByToken,
  auth,
};
