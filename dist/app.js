"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const index_1 = __importDefault(require("./routes/index"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json({ limit: "50mb" }));
app.use(express_1.default.urlencoded({ limit: "50mb", extended: true }));
app.use((_req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Acess-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Request-With, Content-Type, Accept");
    res.setHeader("Acess-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});
// app.use(fileUpload({
//     useTempFiles: true,
//     tempFileDir: "./uploads"
// }));
/////////////////// yy... mirá, luk at dis... yo creo que eso no sirve ya, viste... /////////////////////
app.set("port", process.env.PORT || 3002);
app.use('/api', index_1.default);
exports.default = app;
