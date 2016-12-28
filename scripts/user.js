const program = require('commander');
const mongoose = require('mongoose');
const User = require('../src/services/user/user-model.js');
const crypto = require('bcryptjs');

var config;
if (process.env.NODE_ENV === 'production') {
  config = require('../config/production.json');
} else {
  config = require('../config/default.json');
}

mongoose.Promise = global.Promise;

mongoose.connect(config.mongodb);

var genHash = function(password, cb) {
  crypto.genSalt(10, function(error, salt) {
    if (error) {
      console.log('hash error');
      console.log(error);
      process.exit(1);
    }
    crypto.hash(password, salt, function(error, hash) {
      if (error) {
        console.log('hash error');
        console.log(error);
        process.exit(1);
      }
      cb(hash);
    });
  });
};

program
  .command('add <username> <password> <firstname> <lastname> <role>')
  .description('add a user')
  .action(function(username, password, firstname, lastname, role, options) {
    genHash(password, function(hash) {
      var user = new User({
        username: username,
        password: hash,
        firstname: firstname,
        lastname: lastname,
        roles: [role]
      });

      user.save(function(err) {
        if (!err) {
          console.log('created user '+username);
          process.exit(0);
        } else {
          console.log('mongoose error');
          console.log(err);
          process.exit(1);
        }
      });
    });
  });

program.parse(process.argv);
