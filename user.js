const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  firebase_id: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  f_name: {
    type: String,
    required: true,
  },
  l_name: {
    type: String,
  },
  dob: {
    type: Date,
  },
  gender: {
    type: String,
  },
  mobile: {
    type: String,
  },
  pincode: {
    type: String,
  },
  bio: {
    type: String,
  },
  referral_code: {
    type: String,
  },
  profile_visibility: {
    type: String,
  },
  interests: [String],
  followedBy: [String],
  following: [String],
  blockedBy: [String],
  blocking: [String],
  mutedBy: [String],
  muting: [String],
  Post: [String],
  PostAction: [String],
  Comment: [String],
  CommentAction: [String],
  Orders: [String],
});

const User = mongoose.model('User', schema);

