import express from "express";
import {verifyAdmin, verifyUser } from "../utils/verifyToken.js";
import { 
    createBooking,
    getBooking,
    getAllBooking,
    deleteAllBookings
 } from "../controllers/bookingController.js";

const router = express.Router();

router.post("/", verifyUser, createBooking);
router.get("/:id", verifyUser, getBooking);
router.get("/", verifyAdmin, getAllBooking);
router.delete("/", verifyUser, deleteAllBookings);

export default router;