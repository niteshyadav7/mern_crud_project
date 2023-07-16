import express from "express";
import User from "../Models/userSchema.js";

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      status: "success",
      results: user.length,
      data: [
        {
          user,
        },
      ],
    });
  } catch (err) {
    res.status(204).json({
      status: "fail",
      message: err,
    });
  }
};

const getAllUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json({
      status: "success",
      results: user.length,
      data: [
        {
          user,
        },
      ],
    });
  } catch (err) {
    res.status(204).json({
      status: "fail",
      message: err,
    });
  }
};
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      status: "success",
      results: user.length,
      data: [
        {
          user,
        },
      ],
    });
  } catch (err) {
    res.status(204).json({
      status: "fail",
      message: err,
    });
  }
};
const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(202).json({
      status: "success",
      results: user.length,
      data: [
        {
          user,
        },
      ],
    });
  } catch (err) {
    res.status(204).json({
      status: "fail",
      message: err,
    });
  }
};
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete();
    res.status(204).json({
      status: "success",
      results: user.length,
      data: [
        {
          user,
        },
      ],
    });
  } catch (err) {
    res.status(204).json({
      status: "fail",
      message: err,
    });
  }
};

const router = express.Router();

router.post("/", createUser).get("/", getAllUser);
router
  .get("/:id", getUser)
  .patch("/:id", updateUser)
  .delete("/:id", deleteUser);
export default router;
