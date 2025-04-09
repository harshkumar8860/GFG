const bcrypt = require('bcrypt');

const password = 'password123';

bcrypt.hash(password, 10).then(hash => {
  console.log("New Hash:", hash);
});
