// controllers/userController.js
const User = require('../models/UserModel.js');

exports.createUser = async (req, res) => {
    try {
        const userData = req.body;

        // Validate 'applyFor', 'bestSkills', and 'gender'
        const validApplyFor = ['Director', 'Ambassador'];
        const validBestSkills = ['Leadership', 'Management', 'Communication'];
        const validGender = ['Male', 'Female', 'Others'];

        if (!validApplyFor.includes(userData.applyFor)) {
            return res.status(400).json({ error: 'Invalid value for applyFor' });
        }

        if (userData.bestSkills.some(skill => !validBestSkills.includes(skill))) {
            return res.status(400).json({ error: 'Invalid value in bestSkills' });
        }

        if (!validGender.includes(userData.gender)) {
            return res.status(400).json({ error: 'Invalid value for gender' });
        }

        const user = new User(userData);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
