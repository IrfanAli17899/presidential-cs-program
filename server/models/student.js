
exports = module.exports = function (app, mongoose) {

    'use strict';
    const validator = require('validator');
    const mongooseAutoInc = require('mongoose-auto-increment');
    var Schema = mongoose.Schema;

    var Student = new Schema({
        fullName: {
            type: String,
            require: true,
            minlength: 3,
        },
        userId: {
            type: String,
            require: true,
        },
        dob: {
            type: String,
            require: true,
        },
        gender: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            unique: true,
            require: true,
            trim: true,
            validate: {
                validator: validator.isEmail,
                message: '{VALUE} is not a valid email'
            }
        },
        phoneNumber: {
            type: String,
            require: true,
            minlength: 10,
            unique: true
        },
        lastQualification: {
            type: String,
            require: true
        },
        studentCnic: {
            type: String,
            require: true,
            minlength: 13,
            maxlength: 13,
            unique: true
        },
        fatherCnic: {
            type: String,
            require: true,
            minlength: 13,
            maxlength: 13
        },
        fatherName: {
            type: String,
            require: true,
            minlength: 3
        },
        homeAddress: {
            type: String,
            require: true,
            minlength: 5
        },
        imageUrl: {
            type: String,
            require: true
        },
        course: {
            type: String,
            require: true
        },
        signUpDate: {
            type: Number,
            default: Date.now()
        }
    });
    // mongooseAutoInc.initialize()
    Student.plugin(mongooseAutoInc.plugin, 'idNumber')

    app.db.model('Student', Student);

}