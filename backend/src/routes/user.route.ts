import { Router } from "express";
import {
  getAllUsersHandler,
  healthCheckHandler,
} from "../controllers/user/user.controller";
import authMiddleware from "../middleware/auth.middleware";
import roleMiddleware from "../middleware/role.middleware";

const router = Router();

router.get("/me", authMiddleware, healthCheckHandler);
router.get("/", authMiddleware, roleMiddleware("admin"), getAllUsersHandler);

export default router;
