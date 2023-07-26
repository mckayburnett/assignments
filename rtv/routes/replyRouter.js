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
  Issue.findOne({ _id: req.params.issueId })
    .exec((err, foundIssue) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      if (!foundIssue) {
        res.status(404);
        return next(err);
      }

      const newReply = new Reply({
        text: req.body.text, // This should be a single string representing the reply text
        issue: foundIssue._id,
        user: req.auth._id
      });

      newReply.save((err, savedReply) => {
        if (err) {
          res.status(500);
          return next(err);
        }
        console.log('savedReply', savedReply);

        // Assuming that req.body.text is an array of strings representing multiple replies
        foundIssue.reply.push(req.body.text); // Add the new reply texts to the array

        foundIssue.save((err, updatedIssue) => {
          if (err) {
            res.status(500);
            return next(err);
          }

          return res.status(201).send(updatedIssue);
        });
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