// NOTE: this file is not needed when using MongoDB
var db = require('../config-old');
var User = require('../models/user');

var Users = new db.Collection();

Users.model = User;

module.exports = Users;
