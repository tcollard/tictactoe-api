/*jshint expr: true*/
/*global describe: true*/
/*global it: true*/
/*global after: true*/

var Promise = require('mongoose').Promise;
var UserController = require('../controllers/user-controller');
var UserModel = require('../models/user-model');

require('should');

describe('Board Controller', function(){
    after(function(){
        UserModel.remove({}, function(err){
        });
    });

    describe('#findOne', function(){
        it('should return a promise', function(){
            UserController.findOne({ _id: 0 }).should.be.instanceOf(Promise);
        });

        it('should fail when passing an invalid board id', function(done){
            UserController.findOne({ _id: 0 }).then(null, function(err){
                done();
            });
        });
    });
});