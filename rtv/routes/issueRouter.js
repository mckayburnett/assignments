const express = require('express')
const issueRouter = express.Router()
const Issue = require('../models/issue')
const User = require('../models/user')

//get all issues
issueRouter.get('/', (req, res, next) => {
    Issue.find((err, issues) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})
// using async await
// issueRouter.get('/', async (req, res, next) => {
//     try {
//         const issues = await Issue.find().exec();
//         res.status(200).send(issues);
//     } catch (err) {
//         res.status(500);
//         next(err);
//     }
// });



//get issues by user id
issueRouter.get('/user', (req, res, next) => {
    Issue.find({ user: req.auth._id }, (err, issues) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})
// using async await
// issueRouter.get('/user', async (req, res, next) => {
//     try {
//         const issues = await Issue.find({ user: req.auth._id }).exec();
//         res.status(200).send(issues);
//     } catch (err) {
//         res.status(500);
//         next(err);
//     }
// });

//get issue by issue id
issueRouter.get('/:issueId', (req, res, next) => {
    Issue.findById({_id: req.params.issueId}, (err, foundIssue) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(foundIssue)
    })
})
// using async await
// issueRouter.get('/:issueId', async (req, res, next) => {
//     try {
//         const foundIssue = await Issue.findById(req.params.issueId).exec();
//         res.status(200).send(foundIssue);
//     } catch (err) {
//         res.status(500);
//         next(err);
//     }
// });

//add new issue
issueRouter.post('/', (req, res, next) => {
    req.body.user = req.auth._id
    //const username = req.auth.username
    const newIssue = new Issue(req.body)
    newIssue.save((err, savedIssue) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedIssue)
    })
})
// using async await
// issueRouter.post('/', async (req, res, next) => {
//     try {
//         req.body.user = req.auth._id;
//         const newIssue = new Issue(req.body);
//         const savedIssue = await newIssue.save();
//         res.status(201).send(savedIssue);
//     } catch (err) {
//         res.status(500);
//         next(err);
//     }
// });

//delete issue
issueRouter.delete('/:issueId', (req, res, next) => {
    Issue.findOneAndDelete({ _id: req.params.issueId, user: req.auth._id }, (err, deletedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Succesfully deleted issue: ${deletedIssue.issue}`)
        }
    )
})
// using async await
// issueRouter.delete('/:issueId', async (req, res, next) => {
//     try {
//         const deletedIssue = await Issue.findOneAndDelete({
//             _id: req.params.issueId,
//             user: req.auth._id
//         }).exec();
//         res.status(200).send(`Successfully deleted issue: ${deletedIssue.issue}`);
//     } catch (err) {
//         res.status(500);
//         next(err);
//     }
// });

//edit issue
issueRouter.put('/:issueId', (req, res, next) => {
    Issue.findOneAndUpdate(
        { _id: req.params.issueId }, 
        req.body, 
        { new: true }, 
        (err, updatedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedIssue)
        }
    )
})
// using async await
// issueRouter.put('/:issueId', async (req, res, next) => {
//     try {
//         const updatedIssue = await Issue.findOneAndUpdate(
//             { _id: req.params.issueId },
//             req.body,
//             { new: true }
//         ).exec();
//         res.status(201).send(updatedIssue);
//     } catch (err) {
//         res.status(500);
//         next(err);
//     }
// });

//like issue ($addToSet might help with making it so you can only add one like per userId)
issueRouter.put('/like/:issueId', (req, res, next) => {
    Issue.findOne(
        {_id: req.params.issueId}, (err, foundIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            const liked = foundIssue.userLikes
            if(liked.includes(req.auth._id)){
                res.status(403)
                return next(new Error('Already liked post'))
            }
            foundIssue.updateOne(
                {$inc: {likes: 1}, $addToSet: {userLikes: req.auth._id}},
                {new: true},
                (err, updatedIssue) => {
                    if(err){
                        res.status(500)
                        return next(err)
                    }
                    return res.status(201).send(updatedIssue)
                }
            ) 
        }
    )
})
// using async await
// issueRouter.put('/like/:issueId', async (req, res, next) => {
//     try {
//         const foundIssue = await Issue.findOne({ _id: req.params.issueId }).exec();
//         const liked = foundIssue.userLikes;
//         if (liked.includes(req.auth._id)) {
//             res.status(403);
//             return next(new Error('Already liked post'));
//         }

//         foundIssue.likes += 1;
//         foundIssue.userLikes.push(req.auth._id);
//         const updatedIssue = await foundIssue.save();

//         res.status(201).send(updatedIssue);
//     } catch (err) {
//         res.status(500);
//         next(err);
//     }
// });

//dislike issue
issueRouter.put('/dislike/:issueId', (req, res, next) => {
    Issue.findOne(
        {_id: req.params.issueId}, (err, foundIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            const disliked = foundIssue.userDislikes
            if(disliked.includes(req.auth._id)){
                res.status(403)
                return next(new Error('Already disliked post'))
            }
            foundIssue.updateOne(
                {$inc: {dislikes: 1}, $addToSet: {userDislikes: req.auth._id}},
                {new: true},
                (err, updatedIssue) => {
                    if(err){
                        res.status(500)
                        return next(err)
                    }
                    return res.status(201).send(updatedIssue)
                }
            ) 
        }
    )
})
// using async await
// issueRouter.put('/dislike/:issueId', async (req, res, next) => {
//     try {
//         const foundIssue = await Issue.findOne({ _id: req.params.issueId }).exec();
//         const disliked = foundIssue.userDislikes;
//         if (disliked.includes(req.auth._id)) {
//             res.status(403);
//             return next(new Error('Already disliked post'));
//         }

//         foundIssue.dislikes += 1;
//         foundIssue.userDislikes.push(req.auth._id);
//         const updatedIssue = await foundIssue.save();

//         res.status(201).send(updatedIssue);
//     } catch (err) {
//         res.status(500);
//         next(err);
//     }
// });

module.exports = issueRouter