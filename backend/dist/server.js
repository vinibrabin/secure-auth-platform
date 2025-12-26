"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./config/env");
const app_1 = __importDefault(require("./app"));
const db_1 = __importDefault(require("./config/db"));
const http_1 = __importDefault(require("http"));
const PORT = process.env.PORT || 3000;
const startServer = async () => {
    try {
        await (0, db_1.default)();
        const server = http_1.default.createServer(app_1.default);
        server.listen(PORT, () => {
            console.log(`🚀 Server is running on port ${PORT}`);
        });
    }
    catch (error) {
        console.error("Error starting server:", error);
        process.exit(1);
    }
};
startServer();
