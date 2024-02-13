import { Register } from "../models/users.js";

async function getUserFunction() {
  return await Register.findAll();
}

async function searchFunction(search) {
  const searchResult = (await Register.findAll()).filter((obj) => {
    var temp = obj.toJSON();
    for (let key in temp) {
      if (typeof temp[key] === "string" && temp[key].includes(search)) {
        var temp1 = temp;
      }
    }
    return temp1;
  });

  return searchResult;
}

async function insertUserFunction(username, password) {
  try {
    return await Register.create({ username, password });
  } catch (error) {
    return { msg: error.errors.map((ele) => ele.message).join() };
  }
}

async function checkUserFunction(username) {
  const obj = await Register.findOne({
    where: {
      username: username,
    },
  });
  return obj;
}

export default {
  insertUserFunction,
  getUserFunction,
  checkUserFunction,
  searchFunction,
};
