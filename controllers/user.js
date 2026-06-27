const User = require('../models/user');
const bcrypt=require("bcrypt");

exports.signup = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        const existingUser = await User.findOne({
            where: { email }
        });

        if (existingUser) {

            return res.status(409).json({ 
                success: false, message: 'User already exists'
            });

        }

        const hashedPassword = await bcrypt.hash(password,10);

        await User.create({
            name,
            email,
            password:hashedPassword
        });

        res.status(201).json({
            success: true, message: 'User created successfully'
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            success: false,
            message: 'Something went wrong'
        });
    }

};

exports.login = async (req, res) => {
    try {

        const { email, password } = req.body;

        const user =
            await User.findOne(
                {
                    where: { email }
                });

        if (!user) {
            return res.status(404).json({ success:false, message: 'User not found' });
        }

        const isPasswordMatched = await bcrypt.compare(
            password,
            user.password
        );

        if(!isPasswordMatched){
            return res.status(401).json({ success:false, message: 'User not authorized' });
        }

        return res.status(200).json({ success:true, message: 'User login successful' });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server Error' });
    }

};