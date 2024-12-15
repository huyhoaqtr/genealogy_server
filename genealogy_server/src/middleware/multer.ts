import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { StatusCodes } from "http-status-codes";
import multer from "multer";
import ApiError from "~/utils/api-error";
import { generateCode } from "~/utils/generate";

const endpoint = process.env.AWS_PUBLIC_END_POINT;
const accessKeyId = process.env.R2_ACCESS_KEY_ID;
const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;
const region = process.env.R2_REGION || "auto";

if (!endpoint || !accessKeyId || !secretAccessKey) {
  throw new Error("Missing required environment variables for R2 connection.");
}

const s3 = new S3Client({
  endpoint: endpoint,
  region: region,
  credentials: {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
  },
});

const storage = multer.memoryStorage();

const fileFilter = (req: any, file: Express.Multer.File, cb: any) => {
  if (!file.mimetype.startsWith("image/")) {
    cb(
      new ApiError(StatusCodes.BAD_REQUEST, "Chỉ cho phép upload các file ảnh"),
      false
    );
  }
  cb(null, true);
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
});

const web3Upload = multer({
  storage: storage,
});

const uploadToR2 = async (file: Express.Multer.File) => {
  const randomCode = await generateCode(16);
  const params: any = {
    Bucket: process.env.R2_BUCKET_NAME!,
    Key: `${Date.now()}_${randomCode}.${file.originalname.split(".")[1]}`,
    Body: file.buffer,
    ContentType: file.mimetype,
    ACL: "public-read",
  };

  try {
    const command = new PutObjectCommand(params);
    const result = await s3.send(command);
    return `${process.env.R2_PUBLIC_DOMAIN}/${params.Key}`;
  } catch (error: any) {
    throw new Error("Error uploading file to R2: " + error.message);
  }
};

const deleteFromR2 = async (key: string) => {
  const params: any = {
    Bucket: process.env.R2_BUCKET_NAME!,
    Key: key,
  };

  try {
    const command = new DeleteObjectCommand(params);
    await s3.send(command);
    return `File with key ${key} deleted successfully.`;
  } catch (error: any) {
    throw new Error("Error deleting file from R2: " + error.message);
  }
};

export { upload, web3Upload, uploadToR2, deleteFromR2 };
