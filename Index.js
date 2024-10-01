const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");

const connection = mysql.connnection({
    host:'localhost',
    user:'root',
    database:'test'
});

let getRandomUser = ()  =>{
    return {
      Id: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),

    };
  }

  console.log(getRandomUser());