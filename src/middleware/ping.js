'use strict';

module.exports = function(app) {
  return function(req, res, next) {
    // Perform actions
    res.status(200);
    
    res.send({"pong" : "👌"});
  };
};
