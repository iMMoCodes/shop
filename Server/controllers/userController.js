const User = require('../models/User');
const factory = require('./handlerFactory');
const publicEmail = require('../utils/email');

const filterObj = (obj, ...allowedFields) => {
  const newObject = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) {
      newObject[el] = obj[el];
    }
  });
  return newObject;
};

// Send Newsletter
const sendNewsLetter = async (req, res) => {
  try {
    await new publicEmail(req.body.email).sendNewsletter();
    return res.status(200).json('Email sent!');
  } catch (err) {
    return res.status(500).json({ status: 'error', err });
  }
};

// Update Me
const updateMe = async (req, res, next) => {
  try {
    if (req.body.password || req.body.passwordConfirm) {
      return next(
        res.status(400).json({
          status: 'error',
          message:
            'This route is not for password updates. Please use /updateMyPassword',
        })
      );
    }

    const filteredBody = filterObj(
      req.body,
      'firstName',
      'lastName',
      'email',
      'image',
      'active',
      'phoneNumber',
      'address',
      'gender'
    );

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      filteredBody,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ status: 'error', err });
  }
};

// Delete Me
const deleteMe = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user._id, { active: false });
    res.status(200).json('Account deleted!');
  } catch (err) {
    res.status(500).json({ status: 'error', err });
  }
};

const updateUser = factory.updateOne(User);

const deleteUser = factory.deleteOne(User);

const getUser = factory.getOneById(User);

// Get All Users
const getAllUsers = async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(404).json({ status: 'error', err });
  }
};

// Get User Stats
const getUserStats = async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: '$createdAt' },
        },
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json({ status: 'error', err });
  }
};

module.exports = {
  sendNewsLetter,
  updateMe,
  deleteMe,
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
  getUserStats,
};
