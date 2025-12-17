import { Router } from "express";
import {
  getAllUsersHandler,
  healthCheckHandler,
} from "../controllers/user/user.controller";
import authMiddleware from "../middleware/auth.middleware";
import authorizeRole from "../middleware/role.middleware";

const router = Router();

router.get("/me", authMiddleware, healthCheckHandler);
router.get("/", authMiddleware, authorizeRole("admin"), getAllUsersHandler);

export default router;
