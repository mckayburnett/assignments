const express =  require("express")
const bountyRouter = express.Router()
const {v4: uuidv4} = require("uuid")

const bounties = [
    {firstName: "Darth", lastName: "Vader", living: false, bountyAmount: 5000, jedi: false, _id: uuidv4()},
    {firstName: "Luke", lastName: "Skywalker", living: true, bountyAmount: 10000, jedi: true, _id: uuidv4()},
    {firstName: "General", lastName: "Grevious", living: false, bountyAmount: 2000, jedi: false, _id: uuidv4()},
    {firstName: "Baby", lastName: "Yoda", living: true, bountyAmount: 9999, jedi: true, _id: uuidv4()}
]

bountyRouter.route("/")
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        const newBounty = req.body;
        newBounty._id = uuidv4();
        bounties.push(newBounty);
        res.send(newBounty)
    })
bountyRouter.route("/:bountyId")
    .put((req, res) => {
        const bountyId = req.params.bountyId
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
        res.send(updatedBounty)
    })
    .delete((req, res) => {
        const bountyId = req.params.bountyId
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        bounties.splice(bountyIndex, 1)
        res.send("Succesfully deleted bounty!")
    })

module.exports = bountyRouter