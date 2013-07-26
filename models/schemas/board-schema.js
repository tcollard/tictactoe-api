var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BoardSchema = new Schema({
    turn: {
        type: Number,
        default: 0,        
        min: 0,
        max: 8
    },
    spots: {
        type: [Number],
        default: [2, 2, 2, 2, 2, 2, 2, 2, 2]
    },
    players: [Number],
    isComplete: {
        type: Boolean,
        default: false
    }
});

module.exports = BoardSchema;