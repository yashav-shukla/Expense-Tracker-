const User = require('../models/user');

exports.signup = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        const existingUser = await User.findOne({
            where: { email }
        });

        if (existingUser) {

            return res.status(409).json({
                success: false,
                message: 'User already exists'
            });

        }

        await User.create({
            name,
            email,
            password
        });

        res.status(201).json({
            success: true,
            message: 'User created successfully'
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            success: false,
            message: 'Something went wrong'
        });

    }

};