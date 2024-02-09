import express from "express";
const router = express.Router();
import bcryptjs from 'bcryptjs';
import Account from '../models/account.js';


router.post('/createUser', async(req,res) => {
    
    const {firstName, lastName, email, password} = req.body;
    const hash = await bcryptjs.hash(password, 10);

    Account.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hash,
        isApproved: false,
        isLocked: false
    })
    .then(res => {
        return res.status(200).json({message: res})
    })
    .catch(err => {
        return res.status(500).json({ message: err })
    })
})

router.get('/getUsers', (req,res) => {

})

export default router;