exports = module.exports = function (app, mongoose) {

    'use strict';
    var Schema = mongoose.Schema;
    const UserSchema = new Schema({
        name: {
            type: String,
            required: true,
        },
        facebookID: {
            type: String
        },
        email: {
            type: String,
            required: true,
            unique: true,
        }
    });


    app.db.model('User', UserSchema);

}