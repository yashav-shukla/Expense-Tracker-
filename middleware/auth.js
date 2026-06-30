const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    try {

        const token =
            req.headers.authorization;

        if (!token) {

            return res.status(401).json({

                success: false,

                message: 'Token Missing'

            });

        }

        const decodedToken =
            jwt.verify(
                token,
                'secretkey'
            );

        req.user =
            decodedToken;

        next();

    }

    catch (err) {

        console.log(err);

        return res.status(401).json({

            success: false,

            message: 'Authentication Failed'

        });

    }

};