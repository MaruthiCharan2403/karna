import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const router = express.Router();
router.post('/register', async (req, res) => {
    const { username,email,password} = req.body;
    //check if user already exists
    const user = await User.findOne({ username});
    if (user) return res.status(401).send('User already exists');
    const hashedPassword = await bcrypt.hash(password, 10);
    const users = new User({ username,email, password: hashedPassword });
    try {
      const savedUser = await users.save();
      res.send(savedUser);
    } catch (err) {
      res.status(400).send(err);
    }
  });
  
  router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log(username,password);
    const user = await User.findOne({ username });
    if (!user) return res.status(401).send('Username or password is wrong');
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) return res.status(400).send('Invalid password');
    const token = jwt.sign({ id: user._id }, '8328211811',{expiresIn: '1h'});
    res.header('Authorization', token).send(token);
  });

export default router;