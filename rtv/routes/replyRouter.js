const express = require('express')
const replyRouter = express.Router()
const Issue = require('../models/issue')
const User = require('../models/user')
const Reply = require('../models/reply')

//add reply
replyRouter.put('/:issueId', (req, res, next) => {
  Issue.findOne({ _id: req.params.issueId }, (err, foundIssue) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      if (!foundIssue) {
        res.status(404);
        return next(err);
      }

      const newReply = new Reply({
        text: req.body.text,
        issue: foundIssue._id,
        user: req.auth._id
      });

      newReply.save((err, savedReply) => {
        if (err) {
          res.status(500);
          return next(err);
        }
        console.log('savedReply', savedReply);
        foundIssue.reply.push(savedReply._id);
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

//get replies
replyRouter.get('/:replyId', (req, res, next) => {
  Reply.find({ _id: req.params.replyId}, (err, foundId) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(foundId)
  })
})


//get user replies  by id

//delete reply

//edit reply

//like reply... maybe



module.exports = replyRouter