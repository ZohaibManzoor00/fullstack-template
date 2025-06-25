import arcjet, {
  fixedWindow,
  detectBot,
  protectSignup,
  shield,
  slidingWindow,
  sensitiveInfo,
} from "@arcjet/next";
import { env } from "./env";

export {
  fixedWindow,
  detectBot,
  protectSignup,
  shield,
  slidingWindow,
  sensitiveInfo,
};

export default arcjet({
  key: env.ARCJET_KEY,
  characteristics: ["fingerprint"],
  rules: [
    shield({
      mode: "LIVE",
    }),
  ],
});
