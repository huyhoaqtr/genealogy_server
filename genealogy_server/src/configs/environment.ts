/**
 * Author: Jinn
 * Date: 2024-10-24
 */

import { z } from "zod";
import "dotenv/config";

const envConfigSchema = z.object({
  MONGODB_URL: z.string(),
  BUILD_MODE: z.string().default("dev"),
  JWT_SECRET: z.string(),
  JWT_EXPIRES_IN: z.string(),
  CHAIN_NET: z.string(),
  CONTRACT_ADDRESS: z.string(),
  PORT: z.string().default("3000"),
  HOST: z.string().default("http://localhost"),
  SOCKET_IO: z.string().default("http://localhost:5500"),
});

const envConfigProject = envConfigSchema.safeParse({
  MONGODB_URL: process.env.MONGO_URI,
  BUILD_MODE: process.env.BUILD_MODE,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
  CHAIN_NET: process.env.CHAIN_NET,
  CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS,
  PORT: process.env.PORT,
  HOST: process.env.HOST,
  SOCKET_IO: process.env.SOCKET_IO,
});
if (!envConfigProject.success) {
  console.error(envConfigProject.error.issues);
  throw new Error("The declared values in the .env file are invalid.");
}

const envConfig = envConfigProject.data;
export default envConfig;
