const express = require("express")
const User = require("../models/User")
const bcrypt = require('bcrypt')

const register = async(req, res) => {
    const { username, user_pin_code, user_type } = req.body;

    try {
        // Check if the username already exists
        const existingUser = await User.findOne({ where: { username: username } });

        if (existingUser) {
            return res.status(400).json({ message: "Username is already taken." });
        }

        const hashedPinCode = await bcrypt.hash(String(user_pin_code), 10);

        const newUser = await User.create({
            username: username,
            user_pin_code: hashedPinCode,
            user_type: user_type
        });

        res.status(201).json({ newUser, message: 'Registered successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Registration failed", error: error });
    }
}


const login = async(req, res) => {
    const { username, user_pin_code } = req.body;

    try {
        const user = await User.findOne({ where: { username: username } });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isPinCodeValid = await bcrypt.compare(String(user_pin_code), user.user_pin_code);

        if (isPinCodeValid) {
            res.status(200).json({ user, message: 'Logged in' });
        } else {
            res.status(401).json({ message: 'Incorrect pin code' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Login failed', error: error });
    }
}

const allUsers = async(req, res) => {
    try {
        const users = await User.findAll()
        res.status(200).json({ users });

    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch all users', error: error });

    }

}
const getUser = async(req, res) => {
    const { username } = req.params;
    try {
        const user = await User.findOne({ where: { username: username } });
        res.status(200).json({ user });

    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch a user', error: error });

    }
}

module.exports = { register, login, allUsers, getUser }