"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { CLUSTER_NAME, PASSWORD, USER } = process.env;
const ATLAS = `mongodb+srv://${USER}:${PASSWORD}@${CLUSTER_NAME}.uyoyee0.mongodb.net/?retryWrites=true&w=majority`;
function dbConnect() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const db = yield mongoose_1.default.connect(ATLAS);
            console.log("connected to", db.connection.host);
        }
        catch (error) {
            process.exit(1);
        }
    });
}
;
dbConnect();
exports.default = dbConnect;
