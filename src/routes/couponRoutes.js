import express from "express";

import  authenticate  from "../middleware/authenticate.js";

import { getCoupon, validateCoupon } from "../controllers/couponController.js";

const router = express.Router();

router.get("/", authenticate, getCoupon);
router.post("/", authenticate, validateCoupon);

export default router;