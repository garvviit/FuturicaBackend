const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the user data
const formDataSchema = new Schema({
    employeeId : {
        type: String,
        required : true
    },
    name: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    extraQualifications: {
        type: String, // Array of strings for multiple extra qualifications
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    roleResponsibilities: {
        type: String,
        required: true
    },
    skills: {
        type: String, // Array of strings for multiple skills
        required: true
    },
    fatherName: {
        type: String,
        required: true
    },
    motherName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    maritalStatus: {
        type: String, // Optional: Restrict to certain values
        required: true
    },
    permanentAddress: {
        type: String,
        required: true
    }
}, { timestamps: true }); // Adds createdAt and updatedAt fields automatically

// Export the model
module.exports = mongoose.model('formData', formDataSchema);
