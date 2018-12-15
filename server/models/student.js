
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
            type: String
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
        province: {
            type: String,
            require: true
        },
        city: {
            type: String,
            require: true
        },
        distanceLearning: {
            type: Boolean,
            default: false
        },
        signUpDate: {
            type: Number,
            default: Date.now()
        },
        rollInternal: {
            type: String
        },
        rollNo: {
            type: String
        }

    });
    // mongooseAutoInc.initialize()
    Student.plugin(mongooseAutoInc.plugin, { model: 'Student', field: 'rollInternal', startAt: 1, })

    app.db.model('Student', Student);

}