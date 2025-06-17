// import express from "express";
// import { protectRoute } from "../middleware/auth.middleware.js";
// import { addReview, getProductReviews, getMostUsedTags   } from "../controllers/review.controller.js";

// const router = express.Router();

// router.post("/", protectRoute, addReview);
// router.get("/:productId", getProductReviews);
// router.get("/tags/most-used", getMostUsedTags);


// export default router;



import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { 
  addReview, 
  getProductReviews, 
  getMostUsedTags,
  getReviewStats,
  updateReview,
  deleteReview
} from "../controllers/review.controller.js";

const router = express.Router();

// Public routes
router.get("/tags/most-used", getMostUsedTags);
router.get("/:productId", getProductReviews);
router.get("/stats/:productId", getReviewStats);

// Protected routes (require authentication)
router.post("/", protectRoute, addReview);
router.put("/:reviewId", protectRoute, updateReview);
router.delete("/:reviewId", protectRoute, deleteReview);

export default router;