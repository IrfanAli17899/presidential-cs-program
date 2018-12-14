exports = module.exports = function (app, mongoose) {
    var validator = require('validator');
    'use strict';
    var Schema = mongoose.Schema;
    const adminTable = new Schema({
        userName: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true,
            validate: {
                validator: validator.isEmail,
                message: '{VALUE} is not a valid email'
            }
        },
        phoneNumber: {
            type: String,
            required: true
        }
    });


    app.db.model('admin', adminTable);

}