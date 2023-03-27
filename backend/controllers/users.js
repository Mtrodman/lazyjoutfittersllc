const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')

const { Users } = db
// passwordDigest is from the user model
router.post('/', async (req, res) => {
    let { password, ...rest } = req.body;
    const users = await Users.create({
        ...rest,
        role: 'reviewer',
        passwordDigest: await bcrypt.hash(password, 10)
    })
    res.json(users)
})


router.get('/', async (req, res) => {
    const users = await Users.findAll()
    res.json(users)
})

module.exports = router