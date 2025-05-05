import express from 'express';
import bcrypt from 'bcrypt'; 
import jwt from 'jsonwebtoken';
import config from "config";
import User from '../server/db/Users.js';
const JWT = config.get("JWT");

const router = express.Router();

// Login Route
router.post('/login', async (req, res) => {
    try {
      let user = await User.findOne({ where: { username: req.body.username } });
      if (!user) return res.status(400).json({ message: 'User not found' });
  
      let isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
  
      const token = jwt.sign({ userId: user.id }, JWT.SECRET, { expiresIn: JWT.expires_in });
      res.json({ token, username: user.username });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error, please try again later.' });
    }
});  

// Register Route
router.post('/register', async (req, res) => {
    let username = req.body.username;
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    let user = await User.findOne({ where: { username: username } });
    if (user) {
        res.status(500).json({ message: 'Username already taken.' });
    }

    user = await User.findOne({ where: { email: req.body.email } });
    if (user) {
        res.status(500).json({ message: 'Email already has a registered account.' });
    }

    try {
        const newUser = await User.create({
            username: username,
            password: hashedPassword,
            email: req.body.email,
        });
        const token = jwt.sign({ userId: newUser.id }, JWT.SECRET, { expiresIn: JWT.expires_in });
        res.status(201).json({ token, username });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user.' });
    }
});

// Get User Data Route
router.get('/user-data/:username', async (req, res) => {
    let user = await User.findOne({ where: { username: req.params.username } });
    res.json({ user });
});  

// Update Account Route
router.put('/update-account', async (req, res) => {
    try {
        const username = req.body.username;
        const page = req.body.page;

        if (page == 1) {
            let first_name = req.body.first_name || '';
            let last_name = req.body.last_name || '';
            let birthday = req.body.birthday || null;

            await User.update({
                first_name: first_name,
                last_name: last_name,
                birthday: birthday
            }, { where: { username } });
        }
        else {
            let background_color = req.body.background_color || '';
            let icon = req.body.icon || '';

            await User.update({
                background_color: background_color,
                icon: icon
            }, { where: { username } });
        }

        res.status(201).json({ username: username, page: page, message: 'Account updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating account' });
    }
});

export default router;