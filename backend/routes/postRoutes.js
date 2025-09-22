const express = require("express");
const {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
} = require("../controllers/postController.js");
const { protect } = require("../middleware/authMiddleware.js");

const router = express.Router();

router.route("/").get(getPosts).post(protect, createPost);
router
  .route("/:id")
  .get(getPostById)
  .put(protect, updatePost)
  .delete(protect, deletePost);

module.exports = router;
