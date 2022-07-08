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
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../../models/User");
const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env;
// const GitHubStrategy = Strategy;
// passport.use(
//   new GitHubStrategy(
//     {
//       clientID: GITHUB_CLIENT_ID,
//       clientSecret: GITHUB_CLIENT_SECRET,
//       callbackURL: "http://127.0.0.1:3000/auth/github/callback",
//     },
//     function (
//       accessToken: string,
//       refreshToken: string,
//       profile: Profile,
//       done: OAuth2Strategy.VerifyCallback
//     ) {
//       User.findOrCreate({ githubId: profile.id }, function (err, user) {
//         return done(err, user);
//       });
//     }
//   )
// );
const option = {
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/auth/github/callback",
};
const verify = (accessToken, refreshToken, profile, done) => __awaiter(void 0, void 0, void 0, function* () {
    let userId = yield User_1.userModel.findOne({ _id: profile.id });
});
