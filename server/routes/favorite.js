const express = require('express');
const router = express.Router();
const { Favorite } = require("../models/Favorite");

//=================================
//             Favorite
//=================================

router.post('/favoriteNumber', (req, res) => {

    Favorite.find({ "movieId": req.body.movieId})
        .exec((err, info) => {
            if(err) return res.status(400).send(err)
            res.status(200).json({ success: true, favoriteNumber: info.length})
        })

})

router.post('/favorited', (req, res) => {

    let variables = {
        "movieId" : req.body.movieId,
        "userFrom" : req.body.userFrom
    }

    Favorite.find(variables)
        .exec((err, info) => {
            if(err) return res.status(400).send(err)
            let result = false;
            if(info.length !==0) result = true;
            res.status(200).json({ success: true, favorited: result})
        })

})


module.exports = router;