import { Strategy, Profile } from "passport-github2";
import passport from "passport";
import OAuth2Strategy from "passport-oauth2";

import { userModel } from "../../models/User";

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

const verify = async (
  accessToken: string,
  refreshToken: string,
  profile: Profile,
  done: OAuth2Strategy.VerifyCallback
): Promise<void> => {
  let userId = await userModel.findOne({ _id: profile.id });
};
