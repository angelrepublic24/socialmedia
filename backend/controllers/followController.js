const Follows = require('../models/follows');
const User = require('../models/user');

const createFollow = (req, res) => {
    let body = req.body;


    const identity = req.user;

    let userToFollow = new Follows({
        user: identity,
        followed: body.followed,
    });
    
    userToFollow.save()
                .then((userFollowed) => {
                    if(!userFollowed) return res.status(400).send({
                        status: 'error',
                        message: 'User could not be followed'
                    })
                    res.status(200).send({
                        status: 'success',
                        message: 'Follows created successfully',
                        identity: req.user,
                        userToFollow
                
                    })
                })
                .catch((error) => {
                    return res.status(500).send({
                        status: 'error',
                        message: 'Somthing is wrong',
                        error: error.message

                    })
                })


   
}


module.exports = {
    createFollow,
}