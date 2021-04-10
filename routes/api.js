const express = require('express');

const router = express.Router();

const BlogPost = require('../models/blopPost');

// Routes
router.get('/',(req, res) => {
    
    BlogPost.find({  })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);
        });

});


router.post('/save',(req, res) => {
    const data = req.body;

    const newBlogPost = new BlogPost(data);

    //.save
    newBlogPost.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, Internal server error!'});
            return;
        }

        // BlogPost
        res.json({
            msg: 'Your data has been saved !!!'
        });
    });
});

router.get('/name',(req, res) => {
    const data = {
        username: 'Courtney Cox',
        age: 9
    };
    res.json(data);
});

module.exports = router;