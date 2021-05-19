const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    name: {
        type: String,
        require: [true, 'The name is required']
    },
    email: {
        type: String,
        require: [true, 'The email is required']
    },
    password: {
        type: String,
        require: [true, 'The password is required']
    },
    image: {
        type: String
    },
    role: {
        type: String,
        require: [true, 'The role is required'],
        enum: ['ADMIN_ROLE', 'USER_ROLE']        
    },
    state: {
        type: Boolean,
        default: true        
    },
    google: {
        type: Boolean,
        default: false        
    }
});

module.exports = model('User', UserSchema);