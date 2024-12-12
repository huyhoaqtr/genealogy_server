/**
 * Author: Jinn
 * Date: 2024-10-24
 */

const WHITELIST_DOMAINS = ["http://localhost:4040", "http://192.168.1.173:4040"];

const initialGenealogy = [
  {
    isDelete: false,
    title: "Lời nói đầu",
    text: "",
  },
  {
    isDelete: false,
    title: "Lịch sử dòng họ",
    text: "",
  },
  {
    isDelete: true,
    title: "Nhân vật sử sách ghi tên",
    text: "",
  },
  {
    isDelete: true,
    title: "Người có công với tổ quốc",
    text: "",
  },
  {
    isDelete: true,
    title: "Doanh nhân thành đạt",
    text: "",
  },
  {
    isDelete: true,
    title: "Bảng thành tích học tập",
    text: "",
  },
  {
    isDelete: true,
    title: "Bảng công đức",
    text: "",
  },
  {
    isDelete: true,
    title: "Câu chuyện người tốt việc tốt",
    text: "",
  },
  {
    isDelete: true,
    title: "Phụ chương",
    text: "",
  },
  {
    isDelete: true,
    title: "Văn tế",
    text: "",
  },
];

export { WHITELIST_DOMAINS, initialGenealogy };
