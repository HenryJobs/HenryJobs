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

import "dotenv/config";
import app from "./app";
require("./db");

app.listen(app.get("port"), () => {
	console.log(`Listen on port ${app.get("port")}`)
});
