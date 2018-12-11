exports = module.exports = function (app, mongoose) {

    'use strict';
    var Schema = mongoose.Schema;
    const UserSchema = new Schema({
        name: {
            type: String,
            required: true,
        },
        facebookId: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        submitted: {
            type: Boolean,
            default: false
        }
    });


    app.db.model('User', UserSchema);

}