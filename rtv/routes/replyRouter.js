const express = require('express')
const replyRouter = express.Router()
const Issue = require('../models/issue')
const User = require('../models/user')
const Reply = require('../models/reply')

//add reply
// replyRouter.put('/:issueId', (req, res, next) => {
//     Issue.findOne( {_id: req.params.issueId}, (err, foundIssue) => {
//         if(err){
//             res.status(500)
//             return next(err)
//         }
//         const reply = foundIssue.Reply
//         reply.text.push(req.body)
//         foundIssue.save((err, updatedIssue) => {
//             if(err){
//                 res.status(500)
//             }
//             return res.status(201).send(updatedIssue)
//         })
//     })
// })
replyRouter.put('/:issueId', (req, res, next) => {
    Issue.findOne({_id: req.params.issueId})
      .populate('reply') // Populate the Reply field
      .exec((err, foundIssue) => {
        if (err) {
          res.status(500);
          return next(err);
        }
        if (!foundIssue) {
          res.status(404);
          return next(err);
        }
        if (!foundIssue.reply) {
            foundIssue.reply = {
              text: [] // Initialize the text array if it's null
            };
          }
        const reply = foundIssue.reply;
        reply.text.push({ text: req.body.text });
        foundIssue.save((err, updatedIssue) => {
          if (err) {
            res.status(500);
            return next(err);
          }
          return res.status(201).send(updatedIssue);
        });
      });
  });
  
    // Reply.findOneAndUpdate(
    //     {Issue: {reply: req.params.issueId}},
    //     {$push: {text: req.body.text}},
    //     {new: true},
    //     (err, updatedReply) => {
    //         if(err){
    //             res.status(500)
    //             return next(err)
    //         }
    //         return res.status(201).send(updatedReply)
    //     }
    // )


//get all replies

//get user replies  by id

//delete reply

//edit reply

//like reply... maybe



module.exports = replyRouter