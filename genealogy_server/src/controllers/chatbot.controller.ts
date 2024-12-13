import { NextFunction, Response, Request } from "express";
import { StatusCodes } from "http-status-codes";
import userModel from "~/models/user.schema";
import ApiError from "~/utils/api-error";
import axios from "axios";
import { sendSuccessResponse } from "~/utils/api-response";
import mongoose from "mongoose";
import { formatDate } from "~/utils/format";
import infoModel from "~/models/info.schema";
import genealogyModel from "~/models/genealogy.schema";

const chatbotController = {
  query: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.user.id;
      const { prompt } = req.body;
      const user = await userModel.findById(userId).exec();
      if (!user) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Không tìm thấy dữ liệu");
      }

      const genealogy: any = await genealogyModel
        .findOne({
          tribe: user.tribe,
        })
        .populate({
          path: "tribe",
        })
        .lean()
        .exec();

      const ancestor = await infoModel
        .findOne({
          tribe: user.tribe,
          level: 1,
        })
        .exec();

      const getFamilyMembers: any = async (
        memberId: string
      ): Promise<any[]> => {
        const member = await infoModel
          .findById(memberId)
          .populate({
            path: "parent",
            select: "-couple -children",
          })
          .exec();

        if (!member) return [];

        const couple = await Promise.all(
          (member.couple || []).map(async (partnerId) => {
            return await infoModel
              .findById(partnerId)
              .select("-children -couple")
              .exec();
          })
        );

        const members = [
          {
            ...member.toObject(),
            children: undefined,
            couple: couple.filter((coup) => coup !== null),
          },
        ];

        const children = await Promise.all(
          (member.children || []).map(async (childId) => {
            return await getFamilyMembers(childId.toString());
          })
        );

        return members.concat(children.flat());
      };

      const familyMembers = await getFamilyMembers(ancestor?._id);

      const memberInfoList: any[] = [];

      familyMembers.forEach((member: any) => {
        const memberInfo = [
          "Đời: " +
            member.level +
            `${member.title ? ` (${member.title.toUpperCase()})` : ""}`,
          "Họ và tên: " +
            `${member.fullName} (${
              member.dateOfBirth ? formatDate(member.dateOfBirth) : "?"
            } - ${member.dateOfDeath ? formatDate(member.dateOfDeath) : "?"})`,
          "Giới tính: " +
            (member.gender === "MALE"
              ? "Nam"
              : member.gender === "FEMALE"
              ? "Nữ"
              : "Khác"),
          member.address ? "Địa chỉ: " + member.address : undefined,

          member.parent?.fullName
            ? "Cha: " + member.parent?.fullName
            : undefined,
          member.burial ? "Nơi an táng: " + member.burial : undefined,
          member.personInCharge
            ? "Ngươi thờ cúng: " + member.personInCharge
            : undefined,
          member.placeOfWorship
            ? "Nơi thờ cúng: " + member.placeOfWorship
            : undefined,
          member.couple
            ? member.couple.map(
                (coup: any) =>
                  `Vợ / chồng: ${coup.fullName} (${
                    coup.dateOfBirth ? formatDate(coup.dateOfBirth) : "?"
                  } - ${coup.dateOfDeath ? formatDate(coup.dateOfDeath) : "?"})`
              )
            : undefined,
          member.description ? "Mô tả: " + member.description : undefined,
        ];

        memberInfoList.push(memberInfo.filter((info) => info !== undefined));
      });

      const dbQuery = {
        ...genealogy,
        data: [
          ...genealogy.data.slice(0, 2),
          {
            _id: new mongoose.Types.ObjectId(),
            text: memberInfoList.map((item) => item.join("\n")).join("\n\n"),
            title: "Thông tin thành viên",
            isDelete: false,
          },
          ...genealogy.data.slice(2),
        ],
      };

      const newPrompt = `
Bạn là một trợ lý thông minh, lịch sự và hiểu biết sâu rộng. Khi trả lời, hãy sử dụng phong cách văn nói tự nhiên, trang trọng nhưng gần gũi. Đảm bảo câu trả lời rõ ràng, dễ hiểu, và đi thẳng vào trọng tâm mà không để lộ rằng bạn nhận được dữ liệu từ bất kỳ nguồn nào. Trả lời bằng tiếng Việt một cách ngắn gọn, súc tích nhưng đầy đủ ý.
Người dùng hỏi: ${prompt}

Dữ liệu liên quan từ cơ sở dữ liệu của tôi:
${JSON.stringify(dbQuery)}

Dựa vào câu hỏi của người dùng và dữ liệu trên, hãy cung cấp một câu trả lời đúng trọng tâm và dễ tiếp cận. Nếu có thể, hãy giải thích thêm một cách ngắn gọn nhưng vẫn dễ hiểu.
`;

      const response = await axios.post(
        `${process.env.GEMINI_API}?key=${process.env.GEMINI_API_KEY}`,
        {
          contents: [
            {
              parts: [
                {
                  text: newPrompt,
                },
              ],
            },
          ],
        }
      );


      return sendSuccessResponse(
        res,
        "Thực hành thành công",
        response.data.candidates[0].content.parts[0].text,
        StatusCodes.OK
      );
    } catch (error) {
      if (error instanceof ApiError) {
        return next(error);
      }

      return next(
        new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Đã có lỗi xảy ra")
      );
    }
  },
};

export default chatbotController;
