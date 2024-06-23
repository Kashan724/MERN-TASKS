// models/User.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    applyFor: { 
        type: String, 
        required: true, 
        enum: ['Director', 'Ambassador'] 
    },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    whatsappNumber: { type: String, required: true },
    gender: { 
        type: String, 
        required: true, 
        enum: ['Male', 'Female', 'Others'] 
    },
    instituteName: { type: String, required: true },
    fieldOfStudy: { type: String, required: true },
    yearOfStudy: { type: String, required: true },
    region: { type: String, required: true },
    facebookLink: { type: String, required: false },
    instagramLink: { type: String, required: false },
    linkedinLink: { type: String, required: false },
    previousExperiences: { type: String, required: false },
    bestSkills: { 
        type: [String], 
        required: false, 
        enum: ['Leadership', 'Management', 'Communication','Problem Solving', 'TeamWork'] 
    }
});

module.exports = mongoose.model('User', userSchema);
