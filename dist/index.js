"use strict";
//                               \\\\\\\
//                             \\\\\\\\\\\\
//                           \\\\\\\\\\\\\\\
//   -----------,-|           |C>   // )\\\\|
//            ,','|          /    || ,'/////|
// ---------,','  |         (,    ||   /////
//          ||    |          \\  ||||//''''|
//          ||    |           |||||||     _|
//          ||    |______      `````\____/ \
//          ||    |     ,|         _/_____/ \
//          ||  ,'    ,' |        /          |
//          ||,'    ,'   |       |         \  |
// _________|/    ,'     |      /           | |
// _____________,'      ,',_____|      |    | |
//              |     ,','      |      |    | |
//              |   ,','    ____|_____/    /  |
//              | ,','  __/ |             /   |
// _____________|','   ///_/-------------/   |
//               |===========,'
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = __importDefault(require("./app"));
require("./db");
app_1.default.listen(app_1.default.get("port"), () => {
    console.log(`Listen on port ${app_1.default.get("port")}`);
});
